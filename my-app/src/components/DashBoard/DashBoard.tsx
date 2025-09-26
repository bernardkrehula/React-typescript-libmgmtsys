import './Dashboard.css'
import Modal from './Modal/Modal';

//Maknuti broj books i members samo linkove ostaviti
//Member brine o memberima i book o books


type DataType = {
    defaultIconElements: {
        books: {
            name: string;
            svg: string;
            link: string;
            svgColor: string;
        },
        members: {
            name: string;
            svg: string;
            link: string;
            svgColor: string;
        }
    }
}

type DashBoardTypes = {
    data: DataType;
}

const Dashboard = ({data}: DashBoardTypes) => {
    
    const displayModals = () => {
        return Object.values(data.defaultIconElements).reverse().map((icon, index) => {
            const { name, svg, link, svgColor } = icon;

            const key = name.toLowerCase() as keyof typeof data;

            const listsLength = data[key];

            if(listsLength) return(
                <Modal key={index} name={name} svg={svg} link={link} svgColor={svgColor} length={listsLength.length}/>
            )
        })
    }
    
    return(
        <div className="dashboard">
           <h1>Dashboard</h1> 
           <div className='options'>
                {displayModals()}
           </div>
        </div>
    )
}

export default Dashboard;