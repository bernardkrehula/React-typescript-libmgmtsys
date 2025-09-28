import './Dashboard.css'
import Modal from './Modal/Modal';
import data from '../../data/data';
//Maknuti broj books i members samo linkove ostaviti
//Member brine o memberima i book o books

type IconType = {
    name: string;
    svg: string;
    link: string;
    svgColor?: string;
}

const Dashboard = () => {
    const icons = data.defaultIconElements;

    return(
        <div className="dashboard">
           <h1>Dashboard</h1> 
           <div className='options'>
                {Object.values(icons).reverse().map((icon: IconType, index) => {
                    const { name, svg, link, svgColor } = icon;
                    console.log(svgColor)

                    const key = name.toLowerCase() as keyof typeof data;

                    const listsLength = data[key];

                    if(listsLength) return(
                        <Modal key={index} name={name} svg={svg} link={link} svgColor={svgColor} length={listsLength.length}/>
                    )
                })}
           </div>
        </div>
    )
}

export default Dashboard;