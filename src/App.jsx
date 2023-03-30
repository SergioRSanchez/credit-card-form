import { useState } from 'react';

import MaskedInputCardNumber from './components/inputCardNumber';
import MaskedInputValidThru from './components/inputValidThru';


import { ReactComponent as Visa } from './assets/visa.svg';
import { ReactComponent as ContactlessPayment } from './assets/ContactlessPayment.svg';
import { ReactComponent as ShieldCheck } from './assets/ShieldCheck.svg';
import { ReactComponent as Question } from './assets/Question.svg';


function App() {
  const [ cardNumber, setCardNumber ] = useState('');
  const [ validThru, setValidThru ] = useState('');


  function useMediaQuery(query) {
    const [ matches, setMatches ] = useState(window.matchMedia(query).matches);

    useState(() => {
      const mediaQuery = window.matchMedia(query);
      const updateMatches = () => setMatches(mediaQuery.matches);

      mediaQuery.addListener(updateMatches);
      return () => mediaQuery.removeListener(updateMatches);
    }, [query]);

    return matches;
  }

  function LargerThan640px() {
    const matches = useMediaQuery('(min-width: 640px)');

    if (matches) {
      return <div className='text-[#E5E7EB] flex items-center gap-2'><ShieldCheck />Seus dados estão seguros</div>;
    } else {
      return null;
    }
  }

  function TighterThan640px() {
    const matches = useMediaQuery('(max-width: 640px)');

    if (matches) {
      return <div className='text-[#E5E7EB] flex items-center gap-2'><ShieldCheck />Seus dados estão seguros</div>;
    } else {
      return null;
    }
  }

  


  return (
    <div className='box-border font-["Source_Sans_Pro"] bg-[#101827] sm:h-screen sm:pt-[160px] sm:px-[350px]'>
      <div className='bg-[#1F2937] pt-16 sm:pt-0 max-w-[750px] m-auto h-screen sm:h-fit'>
        <div className='py-6 px-6 m-auto flex flex-col  justify-between gap-12'>
          
          <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>

            <div className='sm:order-last sm:py-4 sm:flex sm:flex-col items-center justify-around sm:gap-8'>
              <section className='w-[280px] h-[168px] sm:mb-8 bg-black mx-auto sm:mx-0 rounded-2xl border-[#374151] border-[1px] pt-4 pb-6 px-6' id='card'>
                <div className='flex items-center justify-between mb-10'>
                  <Visa />
                  <ContactlessPayment />
                </div>

                <div className='flex justify-between text-white mb-6 font-semibold tracking-[.25em]'>
                  <div>4716</div>
                  <div>8039</div>
                  <div>02&bull;&bull;</div>
                  <div>&bull;&bull;&bull;&bull;</div>
                </div>

                <div className='text-[#F9FAFB] text-sm flex justify-between'>
                  <p>Seu nome aqui</p>
                  <div className='flex justify-between text-white mb-6 tracking-[.25em]'>
                    <span>&bull;&bull;</span>
                    <span>/</span>
                    <span>&bull;&bull;</span>
                  </div>
                </div>
              </section>

              <LargerThan640px />
            </div>

            <form id="form" className='flex flex-col sm:mt-0'>
              <label for='cardNumber' className='text-[#E5E7EB] font-semibold text-sm mb-1'>Número do cartão</label>
              <MaskedInputCardNumber value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} />
              
              <label for='name' className='text-[#E5E7EB] font-semibold text-sm mb-1'>Nome do titular</label>
              <input name='name' id='name' type="text" placeholder='Nome como está no cartão' autoCapitalize='characters' autoComplete='off' className='border-[#374151] border-[1px] uppercase rounded p-4 bg-[#101827] mb-6 text-white box-border focus:outline-none focus:ring-2 focus:ring-[#9747FF] hover:ring-2 hover:ring-[#374151] invalid:border-[#FB7185]'/>
              
              
              <div className='flex justify-between gap-4'>
                <div className='flex flex-col'>
                  <label for='name' className='text-[#E5E7EB] font-semibold text-sm mb-1'>Validade</label>
                  <MaskedInputValidThru value={validThru} onChange={(event) => setValidThru(event.target.value)} />
                </div>
                
                <div className='flex flex-col'>
                  <label for='name' className='text-[#E5E7EB] font-semibold text-sm mb-1 flex items-center'>CVV &nbsp;<Question /></label>
                  <input name='name' id='name' type="text" maxLength='3' minLength='3' placeholder='***' className='border-[#374151] w-[129px] border-[1px] rounded p-4 bg-[#101827] text-white box-border focus:outline-none focus:ring-2 focus:ring-[#9747FF] hover:ring-2 hover:ring-[#374151] invalid:border-[#FB7185]'/>
                </div>
              </div>


            </form>

            <TighterThan640px />

          </div>

          <button type="submit" form='form' className='bg-[#9333EA] font-semibold text-lg text-white py-4 rounded hover:bg-[#A855F7] focus:outline-8 disabled:opacity-50 focus:outline-offset-2'>Adicionar cartão</button>
        </div>
      </div>
    </div>
  )
}

export default App
