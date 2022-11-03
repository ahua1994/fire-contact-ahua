import { db } from "../firebase";
import { createContext, useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export const ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [edit, setEdit] = useState(false);
    const [contacts, setContacts] = useState([]);

    async function addUser() {
        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            number: number,
            address: address,
            gender: gender,
        });
        //does not run console.log, if you take away async + await it runs
        console.log("Document written with ID: ", docRef.id);
    }
    const handleSubmit = async e => {
        e.preventDefault();
        console.log(name, number, address);
        if (name.trim() === "" || number.trim() === "" || address.trim() === "") {
            return alert("Please Fill Out The Form");
        }
        addUser();
        setName("");
        setNumber("");
        setAddress("");
        setGender("Other");
    };
    return (
        <ContactContext.Provider
            value={{
                name,
                number,
                gender,
                edit,
                contacts,
                address,
                setName,
                setNumber,
                setGender,
                setEdit,
                setContacts,
                setAddress,
                addUser,
                handleSubmit,
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};
