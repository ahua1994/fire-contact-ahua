import { Table } from "reactstrap";
import "./ContactTable.scss";

const ContactTable = () => {
    return (
        <div className="ContactTable">
            <Table striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone #</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </Table>
        </div>
    );
};

export default ContactTable;
