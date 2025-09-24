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

const Members = ({data, setLibraryData, addNewMember}: MembersType) => {
    const [ isAddBtnClicked, setClicked ] = useState(false);

    const DisplayMemebers = () => {
        return data.map((singleMember, index) => <Member key={index} singleMember={singleMember}/>)
    }

    return(
        <div className="members">
            <div className="members-title">
                <h1>Members</h1>
                <Btn variation="add" onClick={() =>setClicked(true)}>+ Add new member</Btn>
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
            {isAddBtnClicked ? <AddWindow data={data} inputContentVariation='addMember' setClicked={setClicked} addNewMember={addNewMember} setLibraryData={setLibraryData}/> : ''}
        </div>
    )
}

export default Members;