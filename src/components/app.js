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
        this.setState({
            contacts: [contact, ...contacts]
        });
    }
    render(){
        const {contacts} = this.state;
        return (
            <div className="container">
                <h1 className="text-center">Address Book</h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm add={this.addContact} />
                    </div>
                    <ContactList contacts={contacts} />
                </div>
            </div>);
    }
}

export default App;
