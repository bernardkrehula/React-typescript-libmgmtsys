import './SingleInput.css'
import { useState, type MouseEventHandler } from 'react'

type SingleInputType = {
    variation: string;
    placeholder: string;
    value: string | number;
    onClick: MouseEventHandler<HTMLInputElement>;
    inputValue: string;
}

const SingleInput = ({variation, placeholder, value, onClick, inputValue}: SingleInputType) => {
    const [ isInputHovered, setHovered ] = useState(false);

    const acitvateHover = () => {
        setHovered(true);
    }
    const deactivateHover = () => {
        setHovered(false);
    }

    return(
        <div className='input-area'>
            <input onClick={onClick} onMouseEnter={acitvateHover} onMouseLeave={deactivateHover} className={`single-input ${variation} ${isInputHovered ? 'hovered': ''}`} placeholder={placeholder} value={value} required/>
            <div className='label-line'>{inputValue}</div>
        </div>
    )   
}

export default SingleInput;