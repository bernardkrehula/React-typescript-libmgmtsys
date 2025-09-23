import type { MemberType } from "../Members";
import Btn from "../../Btn/Btn";

const Member = ({singleMember}: MemberType) => {
    const { id, name, phone, email, fine } = singleMember;

    return(
        <tr>
            <th>{id}</th>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{fine}</td>
            <td className="btns">
                <Btn variation="edit">
                    <svg className="edit-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
                </Btn>
                <Btn variation="delete">
                    <svg className="delete-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                </Btn>
            </td>
        </tr>
    )
}

export default Member;