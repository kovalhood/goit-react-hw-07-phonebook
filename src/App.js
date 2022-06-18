import Wrapper from "components/Wrapper";
import Section from "components/Section";
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
import { useSelector } from 'react-redux';
import { getItems } from "redux/contacts/contacts-selectors";

function App() {
    const contacts = useSelector(getItems);

    return (
        <Wrapper>
            <Section title={'Phonebook'}>
                <ContactForm />
            </Section>

            <Section title={'Contacts'}>
                <Filter/>
                {contacts.length > 0 ? (
                    <ContactList/>
                ) : (
                    <Notification message="There are no contacts yet" />
                )}
            </Section>
        </Wrapper>
    )
}

export default App;