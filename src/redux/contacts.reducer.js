import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filteredContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filteredContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
