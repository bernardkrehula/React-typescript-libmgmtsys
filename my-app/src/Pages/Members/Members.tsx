import Btn from "../../components/Btn/Btn";
import "./Members.css";
import Member from "./Member/Member";
import AddWindow from "../../components/AddWindow/AddWindow";
import { useState } from "react";
import data from "../../data/data";
import z from "zod";
//Staviti da se ne moze zatvoriti window prije nego sto se zadovolje svi uvjeti
const Members = () => {
  const [ library, setLibrary ] = useState(data.members)
  const [isAddBtnClicked, setClicked] = useState(false);
  const [editValue, setEditValue] = useState(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const FormScheme = z.object({
  id: z.number(),
  name: z.string()
    .min(3, { message: "Name must have at least 3 characters" })
    .max(10, { message: "The name must not be longer than 10 characters." }),
  phone: z.string()
    .min(10, { message: "Phone must have at least 10 characters" }),
  email: z.string()
    .min(10, { message: "Email must have at least 10 characters" })
    .max(30, { message: "Email must not be longer than 30 characters." }),
  fine: z.number({ invalid_type_error: "Fine must be number" }).min(0, { message: "Fine can't be negative" })
});
  const validateInputs = (member) => {
    const result = FormScheme.safeParse(member);

    if(!result.success){
            const fieldErrors: { [key: string]: string } = {};
            result.error.issues.map(err => {
            if(err.path[0]) fieldErrors[err.path[0] as string] = err.message;
              });
            setErrors(fieldErrors);
            return;
        }
        else{
          setErrors({})
          return true;
        }

  }
  const addNewMember = (newMember: {id: number, name: string, phone: string, email: string, fine: number}) => {
   
    if(validateInputs(newMember)){
      setLibrary((prev) => [...prev, newMember]);
      setClicked(false)
    }
  };
  const removeMember = (memberID: number) => {
    setLibrary((prev) => prev.filter((member) => member.id != memberID));
  };
  const editMember = () => {
    if(validateInputs(editValue)) {
      setLibrary(prev => prev.map(member => member.id === editValue.id ? editValue : member));
      setClicked(false);
      resetEditValue();
    }
  };

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
          errors={errors}
        />
      )}
    </div>
  );
};

export default Members;
