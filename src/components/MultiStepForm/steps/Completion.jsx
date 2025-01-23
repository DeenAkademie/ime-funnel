import PropTypes from 'prop-types';
import { Square, CheckSquare } from 'lucide-react';

const Completion = ({ form }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = form;

  const isChecked = watch('agb');

  return (
    <div>
      <h2 className='text-3xl font-semibold mb-6'>Abschluss</h2>
      <div className='mt-6'>
        <label
          htmlFor='agb'
          className='flex items-center gap-4 cursor-pointer group'
        >
          <div className='relative'>
            <input
              {...register('agb')}
              type='checkbox'
              id='agb'
              className='sr-only peer'
            />
            <div className='flex items-center justify-center transition-all text-[#8ac240] hover:text-[#73a334]'>
              {isChecked ? (
                <CheckSquare className='w-6 h-6' strokeWidth={1.5} />
              ) : (
                <Square className='w-6 h-6' strokeWidth={1.5} />
              )}
            </div>
          </div>
          <span className='text-lg'>
            Ich akzeptiere die{' '}
            <a
              href='/agb'
              className='text-[#8ac240] hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              AGB
            </a>
            .
          </span>
        </label>
        {errors.agb && (
          <p className='mt-1 text-red-500 ml-10'>{errors.agb.message}</p>
        )}
      </div>

      <div className='mt-8 p-6 bg-gray-50 rounded-lg'>
        <h3 className='text-xl font-semibold mb-4'>Zusammenfassung</h3>
        <p className='text-gray-600'>
          Bitte überprüfen Sie Ihre Angaben nochmal, bevor Sie das Formular
          absenden. Nach dem Absenden werden wir uns zeitnah bei Ihnen melden.
        </p>
      </div>
    </div>
  );
};

Completion.propTypes = {
  form: PropTypes.shape({
    register: PropTypes.func.isRequired,
    watch: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.shape({
        agb: PropTypes.shape({
          message: PropTypes.string,
        }),
      }),
    }).isRequired,
  }).isRequired,
};

export default Completion;
