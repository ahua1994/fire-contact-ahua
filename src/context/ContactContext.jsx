import { db } from "../firebase";
import { createContext, useState } from "react";
import { addDoc, collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

export const ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("Male");
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState("");
    const [contacts, setContacts] = useState([]);
    const [notice, setNotice] = useState(null);

    async function getUsers() {
        onSnapshot(collection(db, "users"), querySnapshot => {
            setContacts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        });
    }

    async function addUser() {
        await addDoc(collection(db, "users"), {
            name: name,
            number: number,
            address: address,
            gender: gender,
        });
    }
    async function editUser(editId) {
        const docRef = doc(db, "/users/" + editId);
        await setDoc(docRef, {
            name: name,
            number: number,
            address: address,
            gender: gender,
        });
        setNotice("edited");
        setTimeout(() => {
            setNotice(null);
        }, 4000);
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (name.trim() === "" || number.trim() === "" || address.trim() === "") {
            return alert("Please Fill Out The Form");
        }
        if (edit) {
            editUser(editId);
            setEdit(false);
        } else {
            addUser();
            setNotice("added");
            setTimeout(() => {
                setNotice(null);
            }, 4000);
        }
        setName("");
        setNumber("");
        setAddress("");
        setGender("Male");
    };
    const handleEdit = obj => {
        setEdit(true);
        setEditId(obj.id);
        setName(obj.name);
        setNumber(obj.number);
        setAddress(obj.address);
        setGender(obj.gender);
    };
    const handleDelete = async id => {
        await deleteDoc(doc(db, "users", id));
        setNotice("deleted");
        setTimeout(() => {
            setNotice(null);
        }, 4000);
    };
    const noticeText = () => {
        return notice === "deleted"
            ? "Contact Deleted"
            : notice === "edited"
            ? "Contact Updated"
            : "Contact Added";
    };
    const noticeColor = () => {
        return notice === "deleted" ? "danger" : notice === "edited" ? "warning" : "success";
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
                notice,
                setName,
                setNumber,
                setGender,
                setEdit,
                setContacts,
                setAddress,
                addUser,
                getUsers,
                handleSubmit,
                handleEdit,
                handleDelete,
                noticeText,
                noticeColor,
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};
