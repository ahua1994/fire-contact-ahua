import { createContext, useState } from "react";

export default ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [gender, setGender] = useState("");
    const [updating, setUpdating] = useState(false);
    const [contacts, setContacts] = useState([]);
    return (
        <ContactContext.Provider
            value={{
                name,
                number,
                gender,
                updating,
                contacts,
                setName,
                setNumber,
                setGender,
                setUpdating,
                setContacts,
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};
