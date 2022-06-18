import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getItems, getFilter } from "redux/contacts/contacts-selectors";
import Label from './Label';
import InputName from './InputName';
import InputNumber from './InputNumber';
import Button from 'components/Button';
import s from './ContactForm.module.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getItems);
    const filterValue = useSelector(getFilter);
    const dispatch = useDispatch();

    // Function for setting contacts in store
    const handleContactInfo = () => {
        dispatch(actions.addContact(name, number));
        if (filterValue !== '') {
            dispatch(actions.changeFilter(''));
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            if (filterValue !== '') {
                dispatch(actions.changeFilter(''));
            }
            
            return alert(`${name} is already in contacts`);
        }

        handleContactInfo();
        resetForm();
    };

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        
        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number': {
                setNumber(value);
                break;
            }
                
            default:
                return;
        }
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    };

    return <form onSubmit={handleSubmit} className={s.form}>
        <Label labelTitle={'Name'}>
            <InputName name={name} onNameChange={handleChange}/>
        </Label>
        
        <Label labelTitle={'Number'}>
            <InputNumber number={number} onNumberChange={handleChange} />
        </Label>
        
        <Button type={'submit'} title={"Add contact"} />
</form>
};

export default ContactForm;