import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import PersonalData from './steps/PersonalData';
import AddressData from './steps/AddressData';
import TravelType from './steps/TravelType';
import Completion from './steps/Completion';
import ProgressBar from './ProgressBar';
import PropTypes from 'prop-types';

const personSchema = z.object({
  firstname: z
    .string()
    .min(2, 'Vorname muss mindestens 2 Zeichen lang sein')
    .nonempty('Vorname ist erforderlich'),
  lastname: z
    .string()
    .min(2, 'Nachname muss mindestens 2 Zeichen lang sein')
    .nonempty('Nachname ist erforderlich'),
  email: z
    .string()
    .email('Ungültige Email-Adresse')
    .nonempty('Email ist erforderlich'),
  phone: z
    .string()
    .min(6, 'Ungültige Telefonnummer')
    .nonempty('Telefonnummer ist erforderlich'),
});

const childSchema = z.object({
  firstname: z
    .string()
    .min(2, 'Vorname muss mindestens 2 Zeichen lang sein')
    .nonempty('Vorname ist erforderlich'),
  lastname: z
    .string()
    .min(2, 'Nachname muss mindestens 2 Zeichen lang sein')
    .nonempty('Nachname ist erforderlich'),
  age: z
    .number()
    .min(0, 'Alter muss mindestens 0 sein')
    .max(17, 'Alter muss unter 18 sein')
    .or(z.string().regex(/^\d+$/).transform(Number))
    .refine((val) => val >= 0 && val <= 17, {
      message: 'Alter muss zwischen 0 und 17 Jahren liegen',
    }),
});

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, 'Vorname muss mindestens 2 Zeichen lang sein')
    .nonempty('Vorname ist erforderlich'),
  lastname: z
    .string()
    .min(2, 'Nachname muss mindestens 2 Zeichen lang sein')
    .nonempty('Nachname ist erforderlich'),
  adults: z.array(personSchema).optional(),
  children: z.array(childSchema).optional(),
  email: z
    .string()
    .email('Ungültige Email-Adresse')
    .nonempty('Email ist erforderlich'),
  phone: z
    .string()
    .min(6, 'Ungültige Telefonnummer')
    .nonempty('Telefonnummer ist erforderlich'),
  street: z
    .string()
    .min(2, 'Straße ist erforderlich')
    .nonempty('Straße ist erforderlich'),
  postcode: z
    .string()
    .min(4, 'Ungültige Postleitzahl')
    .nonempty('Postleitzahl ist erforderlich'),
  city: z
    .string()
    .min(2, 'Stadt ist erforderlich')
    .nonempty('Stadt ist erforderlich'),
  land: z.string().nonempty('Land ist erforderlich'),
  reise: z.string().nonempty('Bitte wählen Sie eine Reise'),
  reiseart: z.string(),
  reisefuehrer: z.string(),
  reisezeitraum: z.string(),
  agb: z
    .boolean()
    .refine((val) => val === true, 'AGB müssen akzeptiert werden'),
});

const stepValidationFields = {
  0: ['firstname', 'lastname', 'email', 'phone', 'adults', 'children'],
  1: ['street', 'postcode', 'city', 'land'],
  2: ['reise'],
  3: ['agb'],
};

const MultiStepForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      adults: [],
      children: [],
      email: '',
      phone: '',
      street: '',
      postcode: '',
      city: '',
      land: 'Deutschland',
      reise: '',
      reiseart: '',
      reisefuehrer: '',
      reisezeitraum: '',
      agb: false,
    },
    mode: 'onChange',
  });

  const steps = [
    <PersonalData key='personal' form={form} />,
    <AddressData key='address' form={form} />,
    <TravelType key='travel' form={form} />,
    <Completion key='completion' form={form} />,
  ];

  const validateStep = async () => {
    const fieldsToValidate = stepValidationFields[currentStep];
    const result = await form.trigger(fieldsToValidate);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateStep();
    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      form.trigger(stepValidationFields[currentStep]);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        'https://hooks.zapier.com/hooks/catch/8057500/2aojb2d/',
        {
          method: 'POST',
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error();

      toast.success('Formular erfolgreich abgeschickt!');
      onClose();
    } catch {
      toast.error('Fehler beim Senden des Formulars');
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='w-full max-w-2xl mx-auto'
    >
      <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

      <div className='mt-8'>{steps[currentStep]}</div>

      <div className='flex justify-between mt-8'>
        {currentStep > 0 && (
          <button
            type='button'
            onClick={prevStep}
            className='bg-gray-300 text-gray-700 py-3 px-6 rounded-lg shadow hover:bg-gray-400 text-lg'
          >
            Zurück
          </button>
        )}

        {currentStep < steps.length - 1 ? (
          <button
            type='button'
            onClick={nextStep}
            className='bg-[#8ac240] text-white py-3 px-6 rounded-lg shadow hover:bg-[#73a334] text-lg ml-auto 
                     disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={form.formState.isValidating}
          >
            Weiter
          </button>
        ) : (
          <button
            type='submit'
            className='bg-[#8ac240] text-white py-3 px-6 rounded-lg shadow hover:bg-[#73a334] text-lg ml-auto
                     disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          >
            Abschicken
          </button>
        )}
      </div>
    </form>
  );
};

MultiStepForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MultiStepForm;
