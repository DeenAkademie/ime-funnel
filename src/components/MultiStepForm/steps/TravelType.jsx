import PropTypes from 'prop-types';

const REISE_OPTIONEN = [
  // {
  //   id: 'umra-marcel-03',
  //   label: 'UMRA - Marcel Krass 03/25',
  //   reiseart: 'Umra',
  //   reisefuehrer: 'Marcel',
  //   reisezeitraum: '03/25',
  // },
  // {
  //   id: 'umra-marcel-06',
  //   label: 'UMRA - Marcel Krass 06/25',
  //   reiseart: 'Umra',
  //   reisefuehrer: 'Marcel',
  //   reisezeitraum: '06/25',
  // },
];

const TravelType = ({ form }) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = form;

  const handleReiseChange = (e) => {
    const selectedReise = REISE_OPTIONEN.find(
      (option) => option.id === e.target.value
    );
    if (selectedReise) {
      setValue('reiseart', selectedReise.reiseart);
      setValue('reisefuehrer', selectedReise.reisefuehrer);
      setValue('reisezeitraum', selectedReise.reisezeitraum);
    }
  };

  return (
    <div>
      <h2 className='text-3xl font-semibold mb-6'>Reise</h2>
      <div className='mb-6'>
        <label htmlFor='reise' className='block text-lg font-medium mb-2'>
          Wählen Sie Ihre Reise *
        </label>
        <select
          {...register('reise')}
          onChange={(e) => {
            register('reise').onChange(e);
            handleReiseChange(e);
          }}
          className='block w-full border border-gray-300 rounded-lg shadow-sm p-3
                   focus:ring-[#8ac240] focus:border-[#8ac240] text-lg
                   aria-invalid:border-red-500'
          aria-invalid={!!errors.reise}
        >
          <option value=''>Bitte wählen Sie eine Reise</option>
          {REISE_OPTIONEN.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.reise && (
          <p className='mt-1 text-red-500'>{errors.reise.message}</p>
        )}
        {REISE_OPTIONEN.length === 0 && (
          <div className='mt-4 p-4 bg-[#f8f4eb] rounded-lg border border-[#C6A866]/20'>
            <p className='text-gray-700'>
              <span className='font-semibold'>Demnächst verfügbar:</span> Neue
              Umra- und Hadsch-Reisen für die kommende Saison werden in Kürze
              hier veröffentlicht. Schauen Sie nochmal vorbei, um keine Angebote
              zu verpassen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

TravelType.propTypes = {
  form: PropTypes.shape({
    register: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.object,
    }).isRequired,
  }).isRequired,
};

export default TravelType;
