import './Modal.css'
import parse from "html-react-parser";
import { Link } from 'react-router-dom';

type ModalTypes = {
    name: string;
    svg: string;
    link: string;
    length: number;
}

const Modal = ({name, svg, link, length}: ModalTypes) => {
    
    if(name === 'Dashboard') return null;

    return(
        <div className="modal">
            <div className='modal-content'>
                <div className='modal-svg'>
                    {parse(svg)}
                </div>
                <div className='modal-data'>
                    <h2>{name}</h2>
                    <h2>{length}</h2>
                </div>
            </div>
            <div className='modal-line'></div>
            <Link to={link}>See all {name.toLowerCase()}</Link>
        </div>
    )
}

export default Modal;