import Btn from "../Btn/Btn";
import './Members.css'
import Member from "./Member/Member";
import AddWindow from "../AddWindow/AddWindow";
import { useState } from "react";

export type MemberType = {
    id: string;
    name: string;
    phone: string;
    email: string;
    fine: string;
}

type MembersType = {
    membersData: MemberType;
}

const Members = ({data, removeMember, addNewMember}: MembersType) => {
    const [ isAddBtnClicked, setClicked ] = useState(false);
    const [ editValue, setEditValue ] = useState(null);

    const DisplayMemebers = () => {
        return data.map((singleMember, index) => <Member key={index} handleEdit={handleEdit} removeMember={removeMember} singleMember={singleMember}/>)
    }

    const handleEdit = (value) => {
        setEditValue(value);
        setClicked(true);
    }

    return(
        <div className="members">
            <div className="members-title">
                <h1>Members</h1>
                <Btn variation="add" onClick={() => setClicked(true)}>+ Add new member</Btn>
            </div>
            <table className="members-list">
                <thead className="members-header">
                    <tr>
                        <th>Membership No.</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Fine</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="members-body">
                    {DisplayMemebers()} 
                </tbody>
            </table>
            {isAddBtnClicked ? <AddWindow data={data} title='Member' editValue={editValue} inputContentVariation='addMember' setClicked={setClicked} addNewMember={addNewMember}/> : ''}
        </div>
    )
}

export default Members;