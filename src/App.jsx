import "./App.scss";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactTable from "../src/components/ContactTable/ContactTable";
import { ContactContextProvider } from "./context/ContactContext";

function App() {
    return (
        <div className="App">
            <img
                src="https://images.unsplash.com/photo-1556388275-bb5585725aca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=975&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NzQzNDA0Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
                alt="darksmoke"
            />
            <ContactContextProvider>
                <main>
                    <ContactForm />
                    <ContactTable />
                </main>
            </ContactContextProvider>
        </div>
    );
}

export default App;
