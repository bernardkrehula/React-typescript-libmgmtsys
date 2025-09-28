import './Modal.css'
import parse from "html-react-parser";
import { Link } from 'react-router-dom';

type ModalTypes = {
    name: string;
    svg: string;
    link: string;
    length: number;
    svgColor: string;
}

const Modal = ({name, svg, link, length, svgColor}: ModalTypes) => {
    
    if(name === 'Dashboard') return null;

    return(
        <div className="modal">
            <div className='modal-content'>
                <div className='modal-svg' style={{backgroundColor: svgColor}}>
                    {parse(svg)}
                </div>
                <div className='modal-data'>
                    <h2>{name}</h2>
                    <h3>{length}</h3>
                </div>
            </div>
            <div className='modal-line'></div>
            <div className='modal-link'>
                <Link to={link}>See all {name.toLowerCase()}</Link>
                <svg className="arrow" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EastIcon"><path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path></svg>
            </div>
        </div>
    )
}

export default Modal;