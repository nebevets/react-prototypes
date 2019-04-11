import React from 'react';
import ContactCard from './contact_card';

const ContactList = ({contacts}) => {
    const list = contacts.map(
        contact => 
            <ContactCard key={contact.id} contact={contact} />
    );
    return (
        <div className="col-8">
            <div className="row">{list}</div>
        </div>
    );
}

export default ContactList;
