import './SingleInput.css'

type SingleInputType = {
    variation: string;
    placeholder: string;
    value: string | number;
}

const SingleInput = ({variation, placeholder, value}: SingleInputType) => {

    return(
        <input className={`single-input ${variation}`} placeholder={placeholder} value={value}/>
    )   
}

export default SingleInput;