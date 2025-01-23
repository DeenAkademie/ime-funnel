import PropTypes from 'prop-types';

const PersonalData = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h2 className='text-3xl font-semibold mb-6'>Persönliche Daten</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label htmlFor='firstname' className='block text-lg font-medium'>
            Vorname
          </label>
          <input
            {...register('firstname')}
            type='text'
            id='firstname'
            className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                     focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                     aria-invalid:border-red-500'
            aria-invalid={!!errors.firstname}
          />
          {errors.firstname && (
            <p className='mt-1 text-red-500'>{errors.firstname.message}</p>
          )}
        </div>
        <div>
          <label htmlFor='lastname' className='block text-lg font-medium'>
            Nachname
          </label>
          <input
            {...register('lastname')}
            type='text'
            id='lastname'
            className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                     focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                     aria-invalid:border-red-500'
            aria-invalid={!!errors.lastname}
          />
          {errors.lastname && (
            <p className='mt-1 text-red-500'>{errors.lastname.message}</p>
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
      errors: PropTypes.shape({
        firstname: PropTypes.shape({
          message: PropTypes.string,
        }),
        lastname: PropTypes.shape({
          message: PropTypes.string,
        }),
      }),
    }).isRequired,
  }).isRequired,
};

export default PersonalData;
