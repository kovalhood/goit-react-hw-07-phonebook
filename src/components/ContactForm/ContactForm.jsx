import { useState } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contacts/contactsApi';
import Label from './Label';
import InputName from './InputName';
import InputNumber from './InputNumber';
import Button from 'components/Button';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', phone: '' });

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
    
  // const handleChange = event => {
  //   console.log(event.currentTarget);
  //   const { name, value } = event.currentTarget;
    
  //   switch (name) {
  //     case 'name':
  //       setForm(prevForm => ({ ...prevForm, [name]: value }));
  //       break;
      
  //     case 'phone': {
  //       setForm(prevForm => ({ ...prevForm, [name]: value }));
  //       break;
  //     }
      
  //     default:
  //       return;
  //   }
  // };

  const handleNameChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  }
  const handlePhoneChange = phoneValue => {
    // console.log(phoneValue);
    setForm(prevForm => ({ ...prevForm, phone: phoneValue }));
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (form.name === '') {
      return console.log('no name')
    }

    if (form.phone === '') {
      return console.log('no phone')
    }

    if (contacts.find(contact => contact.name.toLowerCase() === form.name.toLowerCase())) {
      resetForm();
      return alert(`${form.name} is already in contacts`);
    }

    addContact(form);
    resetForm();
  };

  const resetForm = () => {
      setForm({ name: '', phone: '' });
  };

  return <form onSubmit={handleSubmit} className={s.form}>
    <Label labelTitle={'Name'}>
      <InputName name={form.name} onNameChange={handleNameChange}/>
    </Label>
    
    <Label labelTitle={'Number'}>
      <InputNumber phone={form.phone} onNumberChange={handlePhoneChange} />
    </Label>
    
    <Button type={'submit'} title={"Add contact"} />
  </form>
};

export default ContactForm;