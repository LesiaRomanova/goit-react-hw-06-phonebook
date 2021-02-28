import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import contactsActions from '../../redux/contacts/contacts-action';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.TaskList}>
    {contacts.map(contact => (
      <li className={styles.TaskList_item} key={contact.id}>
        {contact.name + ':' + contact.number}
        {
          <button
            className={styles.TaskList_button}
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
            // onClick={() => onRemoveContact(id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

const getVisibleContacts = (allContacts, filter) => {
  // const { contacts, filter } = this.state;

  return allContacts.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(contactsActions.removeContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
