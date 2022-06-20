import Wrapper from "components/Wrapper";
import Section from "components/Section";
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Wrapper>
            <Section title={'Phonebook'}>
                <ContactForm />
            </Section>

            <Section title={'Contacts'}>
                <Filter/>
                    <ContactList/>
            </Section>
            <ToastContainer autoClose={3000} theme="colored" />
        </Wrapper>
    )
}

export default App;