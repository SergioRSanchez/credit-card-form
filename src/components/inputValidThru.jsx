import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskedInputValidThru = ({ value, onChange }) => {
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        value: onlyNumbers(event.target.value)
      }
    })
  }

  return <InputMask mask='99/99' maskChar={''} value={value} placeholder='mm/aa' onChange={handleChange} className='border-[#374151] w-[182px] border-[1px] rounded p-4 bg-[#101827] text-white box-border focus:outline-none focus:ring-2 focus:ring-[#9747FF] hover:ring-2 hover:ring-[#374151] invalid:border-[#FB7185]'/>
};

export default MaskedInputValidThru