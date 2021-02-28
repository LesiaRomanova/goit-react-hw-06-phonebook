import { createAction } from '@reduxjs/toolkit';
// import types from './contacts-type';
import { v4 as uuidv4 } from 'uuid';

// const addContact = createAction('contacts / addContact', ({ name, number }) => {
//   return {
//     payload: {
//       name: name,
//       number: number,
//       id: uuidv4(),
//     },
//   };
// });

const addContact = createAction('contacts / addContact', task => {
  return {
    payload: {
      ...task,
      id: uuidv4(),
    },
  };
});

// const addContact = task => ({
//   type: types.ADD,
//   payload: {
//     ...task,
//     id: uuidv4(),
//   },
// });
const removeContact = createAction('contacts / removeContact');
// const removeContact = contactId => ({
//   type: types.REMOVE,
//   payload: contactId,
// });

const changeFilter = createAction('contacts / changeFilter');
// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, removeContact, changeFilter };
