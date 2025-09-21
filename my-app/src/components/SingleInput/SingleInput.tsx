import './SingleInput.css'
import { useState, type MouseEventHandler } from 'react'

type SingleInputType = {
    variation: string;
    placeholder: string;
    value: string | number;
    onClick: MouseEventHandler<HTMLInputElement>;
}

const SingleInput = ({variation, placeholder, value, onClick}: SingleInputType) => {
    const [ isInputHovered, setHovered ] = useState(false);

    const acitvateHover = () => {
        setHovered(true);
    }
    const deactivateHover = () => {
        setHovered(false);
    }

    return(
        <input onClick={onClick} onMouseEnter={acitvateHover} onMouseLeave={deactivateHover} className={`single-input ${variation} ${isInputHovered ? 'hovered': ''}`} placeholder={placeholder} value={value}/>
    )   
}

export default SingleInput;