import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const AddressData = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form;
  const [countries, setCountries] = useState(['Deutschland']);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) throw new Error('Fehler beim Abrufen der Länder');

        const data = await response.json();
        const sortedCountries = data
          .map(
            (country) =>
              country.translations?.deu?.common || country.name.common
          )
          .sort();

        // Deutschland an erste Stelle setzen
        const germanFirst = [
          'Deutschland',
          ...sortedCountries.filter((c) => c !== 'Deutschland'),
        ];
        setCountries(germanFirst);
      } catch (error) {
        console.error('Fehler:', error);
        setCountries(['Deutschland']); // Fallback
      }
    };

    loadCountries();
  }, []);

  return (
    <div>
      <h2 className='text-3xl font-semibold mb-6'>Adressdaten</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label htmlFor='street' className='block text-lg font-medium'>
            Straße
          </label>
          <input
            {...register('street')}
            type='text'
            id='street'
            className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                     focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                     aria-invalid:border-red-500'
            aria-invalid={!!errors.street}
          />
          {errors.street && (
            <p className='mt-1 text-red-500'>{errors.street.message}</p>
          )}
        </div>
        <div>
          <label htmlFor='postcode' className='block text-lg font-medium'>
            Postleitzahl
          </label>
          <input
            {...register('postcode')}
            type='text'
            id='postcode'
            className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                     focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                     aria-invalid:border-red-500'
            aria-invalid={!!errors.postcode}
          />
          {errors.postcode && (
            <p className='mt-1 text-red-500'>{errors.postcode.message}</p>
          )}
        </div>
        <div>
          <label htmlFor='city' className='block text-lg font-medium'>
            Stadt
          </label>
          <input
            {...register('city')}
            type='text'
            id='city'
            className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                     focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                     aria-invalid:border-red-500'
            aria-invalid={!!errors.city}
          />
          {errors.city && (
            <p className='mt-1 text-red-500'>{errors.city.message}</p>
          )}
        </div>
        <div>
          <label htmlFor='land' className='block text-lg font-medium'>
            Land
          </label>
          <select
            {...register('land')}
            id='land'
            className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                     focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                     aria-invalid:border-red-500'
            aria-invalid={!!errors.land}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.land && (
            <p className='mt-1 text-red-500'>{errors.land.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

AddressData.propTypes = {
  form: PropTypes.shape({
    register: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.shape({
        street: PropTypes.shape({
          message: PropTypes.string,
        }),
        postcode: PropTypes.shape({
          message: PropTypes.string,
        }),
        city: PropTypes.shape({
          message: PropTypes.string,
        }),
        land: PropTypes.shape({
          message: PropTypes.string,
        }),
      }),
    }).isRequired,
  }).isRequired,
};

export default AddressData;
