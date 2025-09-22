import parse from "html-react-parser";

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
            {parse(svg)}
            {name}
            {length}
        </div>
    )
}

export default Modal;