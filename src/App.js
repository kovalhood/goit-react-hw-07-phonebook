import Wrapper from "components/Wrapper";
import Section from "components/Section";
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

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
        </Wrapper>
    )
}

export default App;