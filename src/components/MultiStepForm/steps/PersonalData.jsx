import PropTypes from 'prop-types';

const PersonalData = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h2 className='text-3xl font-semibold mb-6'>Persönliche Daten</h2>

      {/* Hauptreisender */}
      <div className='mb-8'>
        <h3 className='text-xl font-medium mb-4'>Hauptreisender</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label htmlFor='firstname' className='block text-lg font-medium'>
              Vorname *
            </label>
            <input
              {...register('firstname')}
              type='text'
              id='firstname'
              className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                       focus:ring-[#C6A866] focus:border-[#C6A866] text-lg p-3
                       aria-invalid:border-red-500'
              aria-invalid={!!errors.firstname}
            />
            {errors.firstname && (
              <p className='mt-1 text-red-500'>{errors.firstname.message}</p>
            )}
          </div>
          <div>
            <label htmlFor='lastname' className='block text-lg font-medium'>
              Nachname *
            </label>
            <input
              {...register('lastname')}
              type='text'
              id='lastname'
              className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                       focus:ring-[#C6A866] focus:border-[#C6A866] text-lg p-3
                       aria-invalid:border-red-500'
              aria-invalid={!!errors.lastname}
            />
            {errors.lastname && (
              <p className='mt-1 text-red-500'>{errors.lastname.message}</p>
            )}
          </div>
          <div>
            <label htmlFor='email' className='block text-lg font-medium'>
              E-Mail *
            </label>
            <input
              {...register('email')}
              type='email'
              id='email'
              className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                       focus:ring-[#C6A866] focus:border-[#C6A866] text-lg p-3
                       aria-invalid:border-red-500'
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className='mt-1 text-red-500'>{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor='phone' className='block text-lg font-medium'>
              Telefonnummer *
            </label>
            <input
              {...register('phone')}
              type='tel'
              id='phone'
              className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                       focus:ring-[#C6A866] focus:border-[#C6A866] text-lg p-3
                       aria-invalid:border-red-500'
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className='mt-1 text-red-500'>{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Zusätzliche Mitreisende */}
      <div className='mb-8'>
        <div>
          <label
            htmlFor='additionalTravelers'
            className='block text-lg font-medium'
          >
            Anzahl zusätzlicher Mitreisender *
          </label>
          <input
            {...register('additionalTravelers', {
              required: 'Bitte geben Sie die Anzahl an',
              min: { value: 0, message: 'Minimum ist 0' },
              max: { value: 99, message: 'Maximum ist 99' },
              pattern: {
                value: /^[0-9]{1,2}$/,
                message: 'Bitte maximal 2 Ziffern eingeben',
              },
            })}
            type='number'
            id='additionalTravelers'
            min='0'
            max='99'
            maxLength='2'
            className='mt-2 w-20 border border-gray-300 rounded-lg shadow-sm 
                     focus:ring-[#C6A866] focus:border-[#C6A866] text-lg p-3
                     aria-invalid:border-red-500
                     [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            onInput={(e) => {
              if (e.target.value.length > 2) {
                e.target.value = e.target.value.slice(0, 2);
              }
            }}
            aria-invalid={!!errors.additionalTravelers}
          />
          {errors.additionalTravelers && (
            <p className='mt-1 text-red-500'>
              {errors.additionalTravelers.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

PersonalData.propTypes = {
  form: PropTypes.shape({
    register: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.object,
    }).isRequired,
  }).isRequired,
};

export default PersonalData;
