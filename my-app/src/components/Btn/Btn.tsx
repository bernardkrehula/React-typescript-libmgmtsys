import './Btn.css'
import type { MouseEventHandler } from "react"

type BtnTypes = {
    variation: string;
    children: string;
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Btn = ({variation, onClick, children}: BtnTypes) => {

    return(
        <button onClick={onClick} className={`btn ${variation}`}>{children}</button>
    )
}

export default Btn;