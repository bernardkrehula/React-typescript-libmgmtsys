import './SingleInput.css'
import { useState, type MouseEventHandler } from 'react'

type SingleInputType = {
    variation: string;
    placeholder: string;
    value: string | number;
    onClick: MouseEventHandler<HTMLInputElement>;
    inputValue: string;
    inputContentVariation: string;
}

const SingleInput = ({  setNewMemberValues, keyName, variation, placeholder, value, onClick, inputValue, inputContentVariation}: SingleInputType) => {
    const [ isInputHovered, setHovered ] = useState(false);
    const [ changedValue, setChangedValue ] = useState(0);
    const [ currencyValue, setCurrencyValue] = useState(0);

    const acitvateHover = () => {
        setHovered(true);
        console.log(value)
    }
    const deactivateHover = () => {
        setHovered(false);
    }
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setChangedValue(newValue);
    };

    return(
        <div className='input-area'>
            {inputValue === 0 ? <div className='currency'>$</div> : ''}
            <input name={keyName} value={inputValue === 0 ? currencyValue : value} onClick={handleOnChange} type={typeof inputValue === 'number' ? 'number' : 'text'} onChange={setNewMemberValues} onClick={onClick} onMouseEnter={acitvateHover} onMouseLeave={deactivateHover} className={`single-input ${variation} ${isInputHovered ? 'hovered': ''}`} placeholder={placeholder} required disabled={keyName === 'id'} min={0}/>
            {keyName === 'id' ? <div className='add-label-line'>Membership No.</div> : ''}
            {keyName === 'fine' ? <div className='add-label-line'>Fine due *</div> : ''}
            <div className={`label-line ${inputContentVariation}`}>{inputValue != 0 ? inputValue : ''}</div>
        </div>
    )   
}

export default SingleInput;