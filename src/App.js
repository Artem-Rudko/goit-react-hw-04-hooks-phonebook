import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';

export default function App() {
    const [contacts, setContacts] = useState(() => {
        return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
    });

    const [filter, setFilter] = useState(() => {
        return JSON.parse(window.localStorage.getItem('filter')) ?? '';
    });

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addNewContact = data => {
        const normalizedData = data.name.toLowerCase();
        const dublicate = contacts.find(
            contact => contact.name.toLowerCase() === normalizedData,
        );

        const newContact = {
            ...data,
            id: uuidv4(),
        };

        dublicate
            ? alert(`${dublicate.name} is already in contacts`)
            : setContacts(contacts => [newContact, ...contacts]);
    };

    const changeFilter = e => {
        setFilter(e.currentTarget.value);
    };

    const deleteContact = contactId => {
        // console.log('delete was clicked');
        // console.log(contactId);
        setContacts(contacts =>
            contacts.filter(contact => contact.id !== contactId),
        );
    };

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
        <div className="App">
            <h1 className="title">Phonebook</h1>
            <ContactForm onSubmit={addNewContact} />
            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList
                contacts={filteredContacts}
                onDeleteContact={deleteContact}
            />
        </div>
    );
}

App.defaultProps = {
    contacts: [],
};

App.propTypes = {
    contacts: PropTypes.array,
    data: PropTypes.shape({ name: PropTypes.string, number: PropTypes.number }),
};
