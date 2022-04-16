import React, { useState } from 'react';

const Shipment = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameBlur = (event) => {
        setName(event.target.value);
    }
    const handleAddressBlur = (event) => {
        setPhone(event.target.value);
    }
    const handlePhoneBlur = (event) => {
        setAddress(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();



    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>  Shipping info </h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Email</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="email" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="password" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password"> Phone number </label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="confirm-password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />

                </form>



            </div>

        </div>
    );
};

export default Shipment;