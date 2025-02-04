import PropTypes from 'prop-types';

const ContactInfo = ({ form }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = form;

  // Beobachte die adults und children Arrays um zu wissen, wie viele Mitreisende es gibt
  const adults = watch('adults') || [];
  const children = watch('children') || [];

  return (
    <div>
      <h2 className='text-3xl font-semibold mb-6'>Kontaktinformationen</h2>

      {/* Hauptreisender */}
      <div className='mb-8'>
        <h3 className='text-xl font-medium mb-4'>Hauptreisender</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label htmlFor='email' className='block text-lg font-medium'>
              E-Mail *
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
              Telefonnummer *
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

      {/* Erwachsene Mitreisende */}
      {adults.map((_, adultId) => (
        <div key={`adult_contact_${adultId}`} className='mb-8'>
          <h3 className='text-xl font-medium mb-4'>
            Erwachsener Mitreisender {adultId + 1}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label
                htmlFor={`adult_${adultId}_email`}
                className='block text-lg font-medium'
              >
                E-Mail *
              </label>
              <input
                {...register(`adults.${adultId}.email`, {
                  required: 'Email ist erforderlich',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Ungültige Email-Adresse',
                  },
                })}
                type='email'
                id={`adult_${adultId}_email`}
                className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                         focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                         aria-invalid:border-red-500'
                aria-invalid={!!errors?.adults?.[adultId]?.email}
              />
              {errors?.adults?.[adultId]?.email && (
                <p className='mt-1 text-red-500'>
                  {errors.adults[adultId].email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor={`adult_${adultId}_phone`}
                className='block text-lg font-medium'
              >
                Telefonnummer *
              </label>
              <input
                {...register(`adults.${adultId}.phone`, {
                  required: 'Telefonnummer ist erforderlich',
                  minLength: {
                    value: 6,
                    message: 'Ungültige Telefonnummer',
                  },
                })}
                type='tel'
                id={`adult_${adultId}_phone`}
                className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                         focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                         aria-invalid:border-red-500'
                aria-invalid={!!errors?.adults?.[adultId]?.phone}
              />
              {errors?.adults?.[adultId]?.phone && (
                <p className='mt-1 text-red-500'>
                  {errors.adults[adultId].phone.message}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Kontaktdaten für Erziehungsberechtigte der Kinder */}
      {children.map((_, childId) => (
        <div key={`child_contact_${childId}`} className='mb-8'>
          <h3 className='text-xl font-medium mb-4'>
            Kontakt Erziehungsberechtigter für Kind {childId + 1}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label
                htmlFor={`child_${childId}_email`}
                className='block text-lg font-medium'
              >
                E-Mail *
              </label>
              <input
                {...register(`children.${childId}.email`, {
                  required: 'Email ist erforderlich',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Ungültige Email-Adresse',
                  },
                })}
                type='email'
                id={`child_${childId}_email`}
                className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                         focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                         aria-invalid:border-red-500'
                aria-invalid={!!errors?.children?.[childId]?.email}
              />
              {errors?.children?.[childId]?.email && (
                <p className='mt-1 text-red-500'>
                  {errors.children[childId].email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor={`child_${childId}_phone`}
                className='block text-lg font-medium'
              >
                Telefonnummer *
              </label>
              <input
                {...register(`children.${childId}.phone`, {
                  required: 'Telefonnummer ist erforderlich',
                  minLength: {
                    value: 6,
                    message: 'Ungültige Telefonnummer',
                  },
                })}
                type='tel'
                id={`child_${childId}_phone`}
                className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                         focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                         aria-invalid:border-red-500'
                aria-invalid={!!errors?.children?.[childId]?.phone}
              />
              {errors?.children?.[childId]?.phone && (
                <p className='mt-1 text-red-500'>
                  {errors.children[childId].phone.message}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ContactInfo.propTypes = {
  form: PropTypes.shape({
    register: PropTypes.func.isRequired,
    watch: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.object,
    }).isRequired,
  }).isRequired,
};

export default ContactInfo;
