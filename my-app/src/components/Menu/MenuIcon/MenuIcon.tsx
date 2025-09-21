import './MenuIcon.css'

type MenuIconType = {
    name: string;
    svg: SVGElement;
}

const MenuIcon = ({name, svg}: MenuIconType) => {

    return(
        <div className="dashboard-icon">
                {svg}
                <h1>{name}</h1>
        </div>
    )
}

export default MenuIcon;