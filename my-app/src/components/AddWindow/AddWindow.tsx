import SingleInput from '../SingleInput/SingleInput';
import './AddWindow.css'
import Btn from '../Btn/Btn';

const AddWindow = () => {

    return(
        <div className='addWindow'>
            <h1>Add Member</h1>
            <div className='addWindow-content'>
                <SingleInput />
                <SingleInput />
                <SingleInput />
                <SingleInput />
                <SingleInput />
                <Btn variation='add'>Add member</Btn>
                <Btn variation='logout'>Cancel</Btn>
            </div>
        </div>
    )
}

export default AddWindow;