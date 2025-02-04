import PropTypes from 'prop-types';
import { useState } from 'react';

const PersonalData = ({ form }) => {
  const [additionalAdults, setAdditionalAdults] = useState([]);
  const [additionalChildren, setAdditionalChildren] = useState([]);
  const {
    register,
    unregister,
    formState: { errors },
  } = form;

  const addAdult = () => {
    const newAdultId = additionalAdults.length;
    setAdditionalAdults([...additionalAdults, newAdultId]);
  };

  const removeAdult = (adultId) => {
    setAdditionalAdults(additionalAdults.filter((id) => id !== adultId));
    unregister(`adults.${adultId}.firstname`);
    unregister(`adults.${adultId}.lastname`);
    unregister(`adults.${adultId}.email`);
    unregister(`adults.${adultId}.phone`);
  };

  const addChild = () => {
    const newChildId = additionalChildren.length;
    setAdditionalChildren([...additionalChildren, newChildId]);
  };

  const removeChild = (childId) => {
    setAdditionalChildren(additionalChildren.filter((id) => id !== childId));
    unregister(`children.${childId}.firstname`);
    unregister(`children.${childId}.lastname`);
    unregister(`children.${childId}.age`);
  };

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
              Nachname *
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
      {additionalAdults.map((adultId) => (
        <div key={`adult_${adultId}`} className='mb-8'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-xl font-medium'>
              Erwachsener Mitreisender {adultId + 1}
            </h3>
            <button
              type='button'
              onClick={() => removeAdult(adultId)}
              className='text-red-500 hover:text-red-700 flex items-center gap-1'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              Entfernen
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label
                htmlFor={`adult_${adultId}_firstname`}
                className='block text-lg font-medium'
              >
                Vorname *
              </label>
              <input
                {...register(`adults.${adultId}.firstname`, {
                  required: 'Vorname ist erforderlich',
                })}
                type='text'
                id={`adult_${adultId}_firstname`}
                className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                         focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                         aria-invalid:border-red-500'
                aria-invalid={!!errors?.adults?.[adultId]?.firstname}
              />
              {errors?.adults?.[adultId]?.firstname && (
                <p className='mt-1 text-red-500'>
                  {errors.adults[adultId].firstname.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor={`adult_${adultId}_lastname`}
                className='block text-lg font-medium'
              >
                Nachname *
              </label>
              <input
                {...register(`adults.${adultId}.lastname`, {
                  required: 'Nachname ist erforderlich',
                })}
                type='text'
                id={`adult_${adultId}_lastname`}
                className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                         focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                         aria-invalid:border-red-500'
                aria-invalid={!!errors?.adults?.[adultId]?.lastname}
              />
              {errors?.adults?.[adultId]?.lastname && (
                <p className='mt-1 text-red-500'>
                  {errors.adults[adultId].lastname.message}
                </p>
              )}
            </div>
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

      {/* Kinder als Mitreisende */}
      {additionalChildren.map((childId) => (
        <div key={`child_${childId}`} className='mb-8'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-xl font-medium'>Kind {childId + 1}</h3>
            <button
              type='button'
              onClick={() => removeChild(childId)}
              className='text-red-500 hover:text-red-700 flex items-center gap-1'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              Entfernen
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label
                htmlFor={`child_${childId}_firstname`}
                className='block text-lg font-medium'
              >
                Vorname *
              </label>
              <input
                {...register(`children.${childId}.firstname`, {
                  required: 'Vorname ist erforderlich',
                })}
                type='text'
                id={`child_${childId}_firstname`}
                className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                         focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                         aria-invalid:border-red-500'
                aria-invalid={!!errors?.children?.[childId]?.firstname}
              />
              {errors?.children?.[childId]?.firstname && (
                <p className='mt-1 text-red-500'>
                  {errors.children[childId].firstname.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor={`child_${childId}_lastname`}
                className='block text-lg font-medium'
              >
                Nachname *
              </label>
              <input
                {...register(`children.${childId}.lastname`, {
                  required: 'Nachname ist erforderlich',
                })}
                type='text'
                id={`child_${childId}_lastname`}
                className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                         focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                         aria-invalid:border-red-500'
                aria-invalid={!!errors?.children?.[childId]?.lastname}
              />
              {errors?.children?.[childId]?.lastname && (
                <p className='mt-1 text-red-500'>
                  {errors.children[childId].lastname.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor={`child_${childId}_age`}
                className='block text-lg font-medium'
              >
                Alter des Kindes *
              </label>
              <input
                {...register(`children.${childId}.age`, {
                  required: 'Alter ist erforderlich',
                  min: {
                    value: 0,
                    message: 'Alter muss mindestens 0 sein',
                  },
                  max: {
                    value: 17,
                    message: 'Alter muss unter 18 sein',
                  },
                })}
                type='number'
                min='0'
                max='17'
                id={`child_${childId}_age`}
                className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                         focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                         aria-invalid:border-red-500'
                aria-invalid={!!errors?.children?.[childId]?.age}
              />
              {errors?.children?.[childId]?.age && (
                <p className='mt-1 text-red-500'>
                  {errors.children[childId].age.message}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Buttons zum Hinzufügen */}
      <div className='flex gap-4'>
        <button
          type='button'
          onClick={addAdult}
          className='mt-4 px-6 py-3 bg-[#8ac240] text-white rounded-lg hover:bg-[#73a334] 
                   transition-colors duration-200 flex items-center gap-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
              clipRule='evenodd'
            />
          </svg>
          Erwachsenen hinzufügen
        </button>

        <button
          type='button'
          onClick={addChild}
          className='mt-4 px-6 py-3 bg-[#8ac240] text-white rounded-lg hover:bg-[#73a334] 
                   transition-colors duration-200 flex items-center gap-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
              clipRule='evenodd'
            />
          </svg>
          Kind hinzufügen
        </button>
      </div>
    </div>
  );
};

PersonalData.propTypes = {
  form: PropTypes.shape({
    register: PropTypes.func.isRequired,
    unregister: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.object,
    }).isRequired,
  }).isRequired,
};

export default PersonalData;
