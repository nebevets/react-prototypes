import React from 'react';

const removeStyle = {
    float: 'right',
    cursor: 'pointer'
};

const ContactCard = (props) => {
    const {email, firstName, id, lastName, phone} = props.contact;
    const {removeContact} = props;
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-header">
                    {lastName}
                    <div className="badge badge-danger" style={removeStyle} onClick={() => removeContact(id)}>
                        x
                    </div>
                </div>
                <div className="card-block">
                    <h4 className="card-title">{firstName} {lastName}</h4>
                    <div className="card-text">
                        <p>
                            <b>Phone:</b> {phone}
                        </p>
                        <p>
                            <b>Email:</b> {email}
                        </p>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default ContactCard;
