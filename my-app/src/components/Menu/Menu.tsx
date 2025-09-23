import './Menu.css'
import { Link } from 'react-router-dom';
import data from '../../data/data';
import parse from "html-react-parser";
import Btn from '../Btn/Btn';

const Menu = () => {
    const defaultIconsData = data.defaultIconElements;

    const displayLinks = () => {
        return Object.values(defaultIconsData).map((icon, index) => {
            const { name, svg, link } = icon;
            
            return(
                <div className='icon' key={index}>
                    {parse(svg)}
                    <Link to={link}>{name}</Link>
                </div>
            )
        })
    }

    return(
        <div className="menu">
            <div className='logo'>
                <div className='logo-content'>
                    <svg className="logo-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalLibraryIcon"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></svg>
                    <h1>Lms</h1>
                </div>
                <div className='horizontal-line'></div>
            </div>
            <div className='vertical-line'/>
            <div className='icons'>
                {displayLinks()}
            </div>
            <Btn variation='logout'>Logout</Btn>
        </div>
    )
}

export default Menu;