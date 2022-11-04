import { useContext, useEffect } from "react";
import { Alert, Table } from "reactstrap";
import { ContactContext } from "../../context/ContactContext";
import "./ContactTable.scss";

const ContactTable = () => {
    const { contacts, getUsers, handleEdit, handleDelete, notice, noticeText, noticeColor } =
        useContext(ContactContext);
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="d-flex flex-column">
            {notice && (
                <Alert className="text-center" color={noticeColor()}>
                    {noticeText()}
                </Alert>
            )}
            <h1 className="mb-4">
                <span>Emergency</span> Contact List
            </h1>
            <div className="ContactTable mt-2">
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone #</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                        {contacts.map((x, i) => (
                            <tr key={i}>
                                <td>{x.name}</td>
                                <td>{x.number}</td>
                                <td>{x.address}</td>
                                <td>{x.gender}</td>
                                <td
                                    style={{ color: "rgb(190,0,0)", cursor: "pointer" }}
                                    onClick={() => handleDelete(x.id)}
                                >
                                    Delete
                                </td>
                                <td
                                    style={{ color: "rgb(0,190,0)", cursor: "pointer" }}
                                    onClick={() => handleEdit(x)}
                                >
                                    Edit
                                </td>
                            </tr>
                        ))}
                    </thead>
                    <tbody></tbody>
                </Table>
            </div>
        </div>
    );
};

export default ContactTable;
