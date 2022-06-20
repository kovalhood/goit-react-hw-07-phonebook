import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery, useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { getFilter } from 'redux/contacts/contactsSlice';
import BarLoader from "react-spinners/BarLoader";
import Notification from 'components/Notification';
import s from './ContactList.module.css';

const ContactList = () => {
  // Color for loader
  const [color, setColor] = useState("#6495ed");

  const { data: contacts, isLoading, isSuccess } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterValue = useSelector(getFilter);

const getContactsList = () => {
    if (filterValue === '') {
      return contacts;
    }

    return contacts.filter(({name}) => name.toLowerCase().includes(filterValue.toLowerCase().trim())
    );
  };

  const items = getContactsList();

  return <ul className={s.contacts}>
    {isLoading && (
      <div className={s.loader}>
        <BarLoader color={color}/>
      </div>
    )}
    
    {isSuccess &&
      items.map(({ id, name, phone }) => (
        <li key={id} className={s.item}>
          <div className={s.test}>
            <p className={s.name}>{name}</p>
            <p className={s.number}>{phone}</p>
          </div>
          <button type='button'
            onClick={() => deleteContact(id)}
            className={s.delete}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </li>))}
    
    {items && items.length === 0 && (
      <Notification message="There are no contacts yet" />
    )}
  </ul>
}

export default ContactList;