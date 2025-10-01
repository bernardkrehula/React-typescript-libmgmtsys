import SingleInput from '../SingleInput/SingleInput';
import './AddWindow.css'
import Btn from '../Btn/Btn';
import { useState } from 'react';

const AddWindow = ({data, inputContentVariation, editMember, errors, isAddBtnClicked, addNewMember, addNewBook, setClicked, title, editValue, editBook, resetEditValue, setEditValue}) => {
    
    const lastObject = data[data.length - 1];
    const newId = Number(lastObject.id) + 1;
    
    const [ newMember, setNewMember ] = useState({
        id: newId,
        name: '',
        phone: '',
        email: '',
        fine: 0,
        
    });
    const [ newBook, setNewBook ] = useState({
        id: newId,
        title: '',
        author: '',
        status: 'Available'
    })

    const DisplayInputs = () => {
        if(editValue){
          return Object.entries(editValue).map(([key, value]) => {
            console.log(editValue)
           return(
                <SingleInput key={key} keyName={key} errors={errors[key]} isAddBtnClicked={isAddBtnClicked} value={value} inputValue={key === 'id' ? value : key === 'fine' ? '' : key} inputContentVariation={inputContentVariation} onChange={setNewValues}></SingleInput>
            )
        })  
        } 
        else{
            return Object.entries(lastObject).map(([key, value]) => {
            let inputValue;
            
            if(key === 'id') inputValue = newId;
            if(key === 'name' || key === 'email' || key === 'phone') inputValue = `${key} *`
            if(key === 'title' || key === 'author') inputValue = `${key} *`
            if(key === 'fine') inputValue = '';
            
            return(
                <SingleInput key={key} keyName={key} errors={errors[key]} isAddBtnClicked={isAddBtnClicked} inputValue={inputValue} onChange={setNewValues} inputContentVariation={inputContentVariation} setNewValues={setNewValues}></SingleInput>
            )
        })
        }
    }
    const setNewValues = (e) => {
        const { name, value } = e.target;
        setNewMember(prev => ({...prev, [name]: name === 'fine' ? Number(value) : value}));
        setNewBook(prev => ({...prev, [name]: value}));
        if(editValue) setEditValue(prev => ({...prev, [name]: name === 'fine' ? Number(value) : value}));
    }
    const handleClick = () => {
        if(!editValue){
            if(title === 'Member') addNewMember(newMember);
            if(title === 'Book') addNewBook(newBook);
        }
        if(editValue){
            if(editBook) editBook();
            if(editMember) editMember();
        }
    }

    return(
        <div className='addWindow'>
            <h1>Add {title}</h1>
            <div className='addWindow-content'>
                {DisplayInputs()}
                <Btn variation='add' onClick={handleClick}>{editValue ? 'Edit' : 'Add'} {title}</Btn>
                <Btn variation='logout' onClick={() => setClicked(false)}>Cancel</Btn>
            </div>
        </div>
    )
}

export default AddWindow;