import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskedInputCardNumber = ({ value, onChange }) => {
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        value: onlyNumbers(event.target.value)
      }
    })
  }

  return <InputMask mask='9999 9999 9999 9999' maskChar={''} value={value} onChange={handleChange} placeholder='4716 **** **** ****' className='border-[#374151] border-[1px] rounded p-4 bg-[#101827] mb-6 text-white text-base box-border focus:outline-none focus:ring-2 focus:ring-[#9747FF] hover:ring-2 hover:ring-[#374151] invalid:border-[#FB7185]'/>
};

export default MaskedInputCardNumber