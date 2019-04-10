import React from 'react';
import ContactForm from './contact_form';
import ContactList from './contact_list';

const App = () =>
    <div className="container">
        <h1 className="text-center">Address Book</h1>
        <div className="row">
            <div className="col-4">
                <ContactForm />
            </div>
            <ContactList />
        </div>
    </div>

export default App;
