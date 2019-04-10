import React, { Component } from 'react';
import Field from './field';

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
      console.log(this.state.form);
    }
    render(){
      const {firstName, lastName, phone, email} = this.state.form;
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name: </label><input onChange={this.handleInputChange} value={firstName} type="text" name="firstName" className="form-control" />
          </div>
          <div className="form-group">
            <label>Last Name: </label><input onChange={this.handleInputChange} value={lastName} type="text" name="lastName" className="form-control" />
          </div>
          <div className="form-group">
            <label>Phone: </label><input onChange={this.handleInputChange} value={phone} type="text" name="phone" className="form-control" />
          </div>
          <div className="form-group">
            <label>Email: </label><input onChange={this.handleInputChange} value={email} type="text" name="email" className="form-control" />
          </div>
          <button>Add Contact</button>
        </form>
      );
    }
}

export default ContactForm;
