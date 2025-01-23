const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className='flex gap-2'>
      {[...Array(totalSteps)].map((_, index) => (
        <span
          key={index}
          className={`flex-1 h-2 rounded-full transition-colors duration-200 ${
            index <= currentStep ? 'bg-[#8ac240]' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
