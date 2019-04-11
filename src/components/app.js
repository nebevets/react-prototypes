import React, { Component } from 'react';
import ContactForm from './contact_form';
import ContactList from './contact_list';
import contacts from '../data/contacts';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts
        };
    }
    addContact = (contact) => {
        const {contacts} = this.state;
        if (!contacts.length) {
            contact.id = 10101;
            contacts.push(contact)
            this.setState({
                contacts
            });
            return;
        }
        const sortedById = contacts.sort((a, b) => b.id - a.id)
        const nextId = sortedById[0].id + 1;
        contact.id = nextId;
        this.setState({
            contacts: [contact, ...contacts]
        });
    }
    removeContact = (id) => {
        const {contacts} = this.state;
        const newContacts = contacts.filter(contact => contact.id !== id);
        this.setState({
            contacts: newContacts
        })
    }
    render(){
        const {contacts} = this.state;
        return (
            <div className="container">
                <h1 className="text-center">Address Book</h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm add={this.addContact}/>
                    </div>
                    <ContactList contacts={contacts} removeContact={this.removeContact}/>
                </div>
            </div>);
    }
}

export default App;
