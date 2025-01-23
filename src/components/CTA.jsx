import { Building2, Users, Hotel } from 'lucide-react';

const CTA = () => {
  return (
    <section id='services' className='py-24 bg-[#F5F5F0]'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='max-w-4xl mb-20'>
          <h4 className='text-lg font-medium mb-4 text-[#8ac240]'>
            IME REISEN
          </h4>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Erleben Sie die spirituelle Reise Ihres Lebens.
          </h2>
          <p className='text-xl text-gray-600'>
            Unsere umfassenden Umra/Hadsch-Pakete bieten Ihnen eine
            unvergessliche Reise, begleitet von erfahrenen Reiseleitern.
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Gebet Card */}
          <div className='bg-white rounded-2xl p-8 shadow-sm'>
            <div className='bg-[#8ac240] w-12 h-12 rounded-lg flex items-center justify-center mb-6'>
              <Building2 className='text-white w-6 h-6' />
            </div>
            <h3 className='text-2xl font-bold mb-4'>Gebet</h3>
            <p className='text-gray-600'>
              Jedes Gebet direkt an der heiligen Moschee
            </p>
          </div>

          {/* Gemeinschaft Card */}
          <div className='bg-white rounded-2xl p-8 shadow-sm'>
            <div className='bg-[#8ac240] w-12 h-12 rounded-lg flex items-center justify-center mb-6'>
              <Users className='text-white w-6 h-6' />
            </div>
            <h3 className='text-2xl font-bold mb-4'>Gemeinschaft</h3>
            <p className='text-gray-600'>
              Exklusiv kleine Gruppe, mehr Betreuung, volle Konzentration
            </p>
          </div>

          {/* Unterkunft Card */}
          <div className='bg-white rounded-2xl p-8 shadow-sm'>
            <div className='bg-[#8ac240] w-12 h-12 rounded-lg flex items-center justify-center mb-6'>
              <Hotel className='text-white w-6 h-6' />
            </div>
            <h3 className='text-2xl font-bold mb-4'>Unterkunft</h3>
            <p className='text-gray-600'>
              Aufenthalt: Hotels in der Nähe der Heiligen Städten
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
