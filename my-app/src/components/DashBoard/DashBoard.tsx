import './Dashboard.css'
import Modal from './Modal';

type DashBoardTypes = {
    data: Object;
}

const Dashboard = ({data}: DashBoardTypes) => {
    
    const displayModals = () => {
        return Object.values(data.defaultIconElements).reverse().map((icon, index) => {
            const { name, svg, link } = icon;

            const listsLength = data[name.toLowerCase()];

            if(listsLength) return(
                <Modal key={index} name={name} svg={svg} link={link} length={listsLength.length}/>
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