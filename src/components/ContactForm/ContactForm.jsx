import "./ContactForm.scss";
import { Button, Form, Input, Label } from "reactstrap";
import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext";

const ContactForm = () => {
    const {
        handleSubmit,
        edit,
        name,
        number,
        gender,
        address,
        setName,
        setNumber,
        setGender,
        setAddress,
    } = useContext(ContactContext);
    return (
        <div className="ContactForm">
            <h2>Add Contact</h2>
            <Form>
                <Label for="name">Contact Name</Label>
                <Input id="name" value={name} onChange={e => setName(e.target.value)}></Input>
                <Label for="number">Phone Number</Label>
                <Input id="number" value={number} onChange={e => setNumber(e.target.value)}></Input>
                <Label for="address">Address</Label>
                <Input
                    id="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                ></Input>
                <Label for="gender">Gender</Label>
                <Input
                    type="select"
                    id="gender"
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                >
                    <option value="Other">Other</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Input>
                <Button color="success" onClick={e => handleSubmit(e)}>
                    {edit ? "Update" : "Add"}
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
