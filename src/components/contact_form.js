import React, { Component } from 'react';
import Field from './field';

const labels = {
  firstName: "First Name",
  lastName: "Last Name",
  phone: "Phone",
  email: "Email",
};

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
          form: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
          },
        }
    }
    handleInputChange = (event) => {
      const {name, value} = event.target;
      const {form} = this.state;
      form[name] = value;
      this.setState({
        form: {...form}
      });
    }
    handleSubmit = (event) => {
      event.preventDefault();
    }
    render(){
      return (
        <form onSubmit={this.handleSubmit}>
          {
            Object
              .keys(this.state.form)
              .map((key, index) => <Field
                            className="form-control"
                            key={index}
                            label={labels[key]}
                            name={key}
                            onChange={this.handleInputChange}
                            type="text"
                            value={this.state.form[key]}
                          />)
          }
          <button>Add Contact</button>
        </form>
      );
    }
}

export default ContactForm;
