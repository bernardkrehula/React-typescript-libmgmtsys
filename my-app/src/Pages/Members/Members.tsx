import Btn from "../../components/Btn/Btn";
import "./Members.css";
import Member from "./Member/Member";
import AddWindow from "../../components/AddWindow/AddWindow";
import { useState } from "react";
import data from "../../data/data";

const Members = () => {
  const [ library, setLibrary ] = useState(data.members)
  const [isAddBtnClicked, setClicked] = useState(false);
  const [editValue, setEditValue] = useState(null);

  const addNewMember = (newMember: {id: string, name: string, phone: string, email: string, fine: number}) => {
    setLibrary((prev) => [...prev, newMember]);
  };
  const removeMember = (memberID: string) => {
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
          setClicked={setClicked}
          resetEditValue={resetEditValue}
          editMember={editMember}
          setEditValue={setEditValue}
          editValue={editValue}
          title="Member"
          inputContentVariation="addMember"
        />
      )}
    </div>
  );
};

export default Members;
