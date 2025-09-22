import './Dashboard.css'

type DashBoardTypes = {
    data: string[];
}

const Dashboard = ({data}: DashBoardTypes) => {
    console.log(data)

    return(
        <div className="dashboard">
           <h1>Dashboard</h1> 
           <div className='options'>
            
           </div>
        </div>
    )
}

export default Dashboard;