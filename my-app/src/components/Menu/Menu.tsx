import DashboardIcon from '../DashBoard/DashBoardIcon/DashBoardIcon';
import './Menu.css'
import { Link } from 'react-router-dom';
import data from '../../data/data';
import parse from "html-react-parser";

const Menu = () => {
    const defaultIconsData = data.defaultIconElements;

    const displayLinks = () => {
        return Object.values(defaultIconsData).map(icon => {
            const { name, svg, link } = icon;
            console.log(svg)
            return(
                <div className='icon'>
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
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalLibraryIcon"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></svg>
                    <h1>Lms</h1>
                </div>
                <div className='horizontal-line'></div>
            </div>
            <div className='vertical-line'/>
            <div className='icons'>
                {displayLinks()}
            </div>
        </div>
    )
}

export default Menu;