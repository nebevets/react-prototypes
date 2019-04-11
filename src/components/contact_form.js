import React, { Component } from 'react';
import Field from './field';

const labels = {
  firstName: "First Name",
  lastName: "Last Name",
  phone: "Phone",
  email: "Email",
};

const createBlankForm = () => {
  const blankForm = {};
  const keys = Object.keys(labels);
  for (const key of keys){
    blankForm[key] = '';
  }
  return blankForm;
}

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
          form: createBlankForm()
        };
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
      const {add} = this.props;
      const {form} = this.state;
      add(form);
      this.resetForm();
      event.preventDefault();
    }
    resetForm = () => {
      const newForm = createBlankForm();
      this.setState({
        form: newForm
      });
    }
    render(){
      const {form} = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          {
            Object
              .keys(form)
              .map((key, index) =>
                <Field
                  className="form-control"
                  key={index}
                  label={labels[key]}
                  name={key}
                  onChange={this.handleInputChange}
                  type="text"
                  value={form[key]}
                />)
          }
          <button className="btn btn-outline-primary mr-1">Add Contact</button>
          <button className="btn btn-outline-secondary mr-1" type="button" onClick={this.resetForm}>Reset Form</button>
        </form>
      );
    }
}

export default ContactForm;
