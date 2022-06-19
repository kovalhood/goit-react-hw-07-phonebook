import { useSelector } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import s from './ContactList.module.css';
import { useGetContactsQuery, useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { getFilter } from 'redux/contacts/contactsSlice';
import Notification from 'components/Notification';

const ContactList = () => {
  const { data: contacts, isLoading, isSuccess } = useGetContactsQuery();
  const filterValue = useSelector(getFilter);
  const [deleteContact] = useDeleteContactMutation();

const getVisibleContacts = () => {
    if (filterValue === '') {
      return contacts;
    }

    return contacts.filter(({name}) => name.toLowerCase().includes(filterValue.toLowerCase().trim())
    );
  };

  let items = getVisibleContacts();
  console.log(items);

  return <ul className={s.contacts}>
      {isLoading && (
        <div className={s.loader}>
          <p>Loading...</p>
        </div>
      )}
      {isSuccess &&
        items.map(({ id, name, phone }) => (
        <li key={id} className={s.item}>
          <div>
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