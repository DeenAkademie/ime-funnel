import PropTypes from 'prop-types';

const ContactInfo = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h2 className='text-3xl font-semibold mb-6'>Kontaktinformationen</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label htmlFor='email' className='block text-lg font-medium'>
            E-Mail
          </label>
          <input
            {...register('email')}
            type='email'
            id='email'
            className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                     focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                     aria-invalid:border-red-500'
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className='mt-1 text-red-500'>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor='phone' className='block text-lg font-medium'>
            Telefonnummer
          </label>
          <input
            {...register('phone')}
            type='tel'
            id='phone'
            className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                     focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                     aria-invalid:border-red-500'
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className='mt-1 text-red-500'>{errors.phone.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  form: PropTypes.shape({
    register: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.shape({
        email: PropTypes.shape({
          message: PropTypes.string,
        }),
        phone: PropTypes.shape({
          message: PropTypes.string,
        }),
      }),
    }).isRequired,
  }).isRequired,
};

export default ContactInfo;
