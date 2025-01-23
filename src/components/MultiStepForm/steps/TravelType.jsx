import PropTypes from 'prop-types';

const TravelType = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h2 className='text-3xl font-semibold mb-6'>Reiseart</h2>
      <div className='space-y-6'>
        <div>
          <label htmlFor='reiseart' className='block text-lg font-medium'>
            Bitte wählen Sie die Reiseart
          </label>
          <select
            {...register('reiseart')}
            id='reiseart'
            className='mt-2 block w-full border border-gray-300 rounded-lg shadow-sm 
                     focus:ring-[#8ac240] focus:border-[#8ac240] text-lg p-3
                     aria-invalid:border-red-500'
            aria-invalid={!!errors.reiseart}
          >
            <option value='Umra'>Umra</option>
            <option value='Hadsch'>Hadsch</option>
          </select>
          {errors.reiseart && (
            <p className='mt-1 text-red-500'>{errors.reiseart.message}</p>
          )}
        </div>

        <div className='p-6 bg-gray-50 rounded-lg'>
          <h3 className='text-xl font-semibold mb-4'>
            Informationen zu den Reisearten
          </h3>
          <div className='space-y-4'>
            <div>
              <h4 className='font-medium'>Umra</h4>
              <p className='text-gray-600'>
                Die kleine Pilgerfahrt, die zu jeder Jahreszeit durchgeführt
                werden kann.
              </p>
            </div>
            <div>
              <h4 className='font-medium'>Hadsch</h4>
              <p className='text-gray-600'>
                Die große Pilgerfahrt, die nur zu bestimmten Zeiten im
                islamischen Jahr stattfindet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TravelType.propTypes = {
  form: PropTypes.shape({
    register: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.shape({
        reiseart: PropTypes.shape({
          message: PropTypes.string,
        }),
      }),
    }).isRequired,
  }).isRequired,
};

export default TravelType;
