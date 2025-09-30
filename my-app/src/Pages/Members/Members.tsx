import Btn from "../../components/Btn/Btn";
import "./Members.css";
import Member from "./Member/Member";
import AddWindow from "../../components/AddWindow/AddWindow";
import { useState } from "react";
import data from "../../data/data";
import z from "zod";

const Members = () => {
  const [ library, setLibrary ] = useState(data.members)
  const [isAddBtnClicked, setClicked] = useState(false);
  const [editValue, setEditValue] = useState(null);

  const FormScheme = z.object({
    id: z.number(),
    name: z.string().max(10).min(3),
    phone: z.string().min(3),
    email: z.string().max(30).min(10),
    fine: z.string()
  })

  const addNewMember = (newMember: {id: number, name: string, phone: string, email: string, fine: number}) => {
    const result = FormScheme.safeParse(newMember);
    if(!result.success){
      console.log('error')
    }
    else{
      setLibrary((prev) => [...prev, newMember]);
      setClicked(false)
    }
  };
  const removeMember = (memberID: number) => {
    setLibrary((prev) => prev.filter((member) => member.id != memberID));
  };
  const editMember = () => setLibrary(prev => prev.map(member => member.id === editValue.id ? editValue : member));

  const handleEdit = (value) => {
    setEditValue(value);
    setClicked(true);
  };
  const resetEditValue = () => setEditValue(null);

  return (
    <div className="members">
      <div className="members-title">
        <h1>Members</h1>
        <Btn variation="add" onClick={() => setClicked(true)}>
          + Add new member
        </Btn>
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
        <tbody className="members-body">{library.map((singleMember, index) => (
          <Member
            key={index}
            handleEdit={handleEdit}
            removeMember={removeMember}
            singleMember={singleMember}
          />
        ))}</tbody>
      </table>
      {isAddBtnClicked && (
        <AddWindow
          data={library}
          editValue={editValue}
          addNewMember={addNewMember}
          resetEditValue={resetEditValue}
          editMember={editMember}
          setEditValue={setEditValue}
          setClicked={setClicked}
          title="Member"
          inputContentVariation="addMember"
          isAddBtnClicked={isAddBtnClicked}
        />
      )}
    </div>
  );
};

export default Members;
