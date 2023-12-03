import axios from 'axios';

const { createAsyncThunk } = require('@reduxjs/toolkit');
axios.defaults.baseURL = 'https://6566681064fcff8d730ec5ba.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const contact = await addContact(newContact);
      return contact;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (newContact, thunkAPI) => {
    try {
      const contact = await deleteContact(newContact);
      return contact;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
