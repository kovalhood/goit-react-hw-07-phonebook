import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getItems, getFilter } from "redux/contacts/contacts-selectors";
import Label from './Label';
import InputName from './InputName';
import InputNumber from './InputNumber';
import Button from 'components/Button';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contacts/contactsApi';

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', phone: '' });
    const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
    
    const handleChange = event => {
        const { name, value } = event.currentTarget;
        
        switch (name) {
            case 'name':
                setForm(prevForm => ({ ...prevForm, [name]: value }));
                break;
            
            case 'phone': {
                setForm(prevForm => ({ ...prevForm, [name]: value }));
                break;
            }
                
            default:
                return;
        }
    };

      const handleSubmit = e => {
    e.preventDefault();
    const data = { ...form };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      resetForm();
      return alert(`Number: ${data.name} is already in phonebook`);
    }
    addContact(data);
    resetForm();
  };

    const resetForm = () => {
        setForm({ name: '', phone: '' });
    };

    return <form onSubmit={handleSubmit} className={s.form}>
        <Label labelTitle={'Name'}>
            <InputName name={form.name} onNameChange={handleChange}/>
        </Label>
        
        <Label labelTitle={'Number'}>
            <InputNumber phone={form.phone} onNumberChange={handleChange} />
        </Label>
        
        <Button type={'submit'} title={"Add contact"} />
</form>
};

export default ContactForm;