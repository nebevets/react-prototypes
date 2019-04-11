import React from 'react';
import ContactCard from './contact_card';

const ContactList = ({contacts, removeContact}) => {
    const list = contacts.map(
        (contact, index) => 
            <ContactCard key={index} contact={contact} removeContact={removeContact}/>
    );
    return (
        <div className="col-8">
            <div className="row">{list}</div>
        </div>
    );
}

export default ContactList;
