import SingleInput from '../SingleInput/SingleInput';
import './AddWindow.css'
import Btn from '../Btn/Btn';

const AddWindow = ({data}) => {

    const DisplayInputs = () => {
        const lastObject = data[data.length - 1];
        const newId = Number(lastObject.id) + 1;
        
        return Object.entries(lastObject).map(([key, value]) => {
            const inputValue = key === "id" ? newId : key;
            console.log(inputValue)
            return(
                <SingleInput inputValue={inputValue}></SingleInput>
            )
        })
    }

    return(
        <div className='addWindow'>
            <h1>Add Member</h1>
            <div className='addWindow-content'>
                {DisplayInputs()}
                <Btn variation='add'>Add member</Btn>
                <Btn variation='logout'>Cancel</Btn>
            </div>
        </div>
    )
}

export default AddWindow;