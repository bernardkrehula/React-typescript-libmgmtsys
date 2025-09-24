import SingleInput from '../SingleInput/SingleInput';
import './AddWindow.css'
import Btn from '../Btn/Btn';
import { useState } from 'react';

const AddWindow = ({data, inputContentVariation, addNewMember, setClicked, title}) => {
    const lastMember = data[data.length - 1];
    const newId = Number(lastMember.id) + 1;
    const [ newMember, setNewMember ] = useState({
        id: newId,
        name: '',
        phone: '',
        email: '',
        fine: 0,
    });

    const DisplayInputs = () => {
        return Object.entries(lastMember).map(([key, value]) => {
            let inputValue;
            inputValue = key === "id" ? newId : key;
            if(key === 'name' || key === 'email' || key === 'phone') inputValue = `${key} *`
            if(key === 'fine') inputValue = 0;
         
            return(
                <SingleInput key={key} keyName={key} inputValue={inputValue} inputContentVariation={inputContentVariation} setNewMemberValues={setNewMemberValues}></SingleInput>
            )
        })
    }
    const setNewMemberValues = (e) => {
        const { name, value } = e.target;
        setNewMember(prev => ({...prev, [name]: value}))
    }
    const handleAddClick = () => {
        setClicked(false);
        addNewMember(newMember);
    }

    return(
        <div className='addWindow'>
            <h1>Add {title}</h1>
            <div className='addWindow-content'>
                {DisplayInputs()}
                <Btn variation='add' onClick={handleAddClick}>Add member</Btn>
                <Btn variation='logout' onClick={() => setClicked(false)}>Cancel</Btn>
            </div>
        </div>
    )
}

export default AddWindow;