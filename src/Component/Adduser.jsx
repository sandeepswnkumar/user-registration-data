import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import axios from '../Axios';

const Adduser = () => {

    const history = useHistory();
    
    const [userData, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        gender: "",
        status: ""
    });
    



    const inputValue = (e) => {
        setData({ ...userData, [e.target.name]: e.target.value })
    }

    const { name, email, mobile } = userData;

    const postData = async (e) => {
        
        
        e.preventDefault();

        try {
            const res = await axios.post('/user', userData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
           
            if (res.status === 200) {
                alert('User Registred Successfully')
                history.push('/');
            }
        } catch (error) {
            console.log(error)

        }

    }


    return (
        <div className="container">
            <div className="back">
                <NavLink to='/'> <button><i className="fas fa-angle-double-left"></i> All Users</button></NavLink>
            </div>
            <div className="head">
                <h3>New User</h3>
                <p>Use the below from to create a new account</p>
            </div>
            <form className="fromData" onSubmit={postData}>
                <div className="formgroup">
                    <label htmlFor="name">Name :</label>
                    <input onChange={inputValue} value={name} type="text" id="name" name='name' placeholder="Name" required />
                </div>
                <div className="formgroup">
                    <label htmlFor="email">Email :</label>
                    <input onChange={inputValue} value={email} type="email" id="email" name="email" placeholder="Email" required />
                </div>
                <div className="formgroup">
                    <label htmlFor="mobile">Mobile No :</label>
                    <input onChange={inputValue} value={mobile} type="text" id="mobile" name="mobile" placeholder="Mobile No." required />
                </div>
                <div className="formgroup">
                    <div className="gender">
                        <label htmlFor="gender" className='genderHead'>Gander</label>
                        <div className="gender_item">
                            <input type="radio" id="male" name='gender' onChange={inputValue} value='Male' required />
                            <label htmlFor="male" >Male</label>
                            <input type="radio" id="female" name='gender' onChange={inputValue} value='Female' required />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
                <div className="formgroup">
                    <div className="status">
                        <label htmlFor="status" className='statusHead'>Status</label>
                        <div className="status_item">
                            <input type="radio" id="active" onChange={inputValue} name='status' value='Active' required />
                            <label htmlFor="active">Active </label>
                            <input type="radio" id="inactive" onChange={inputValue} name='status' value='Inactive' required />
                            <label htmlFor="inactive">Inactive</label>
                        </div>

                    </div>
                </div>
                <button className='save'>Save</button>
            </form>
        </div>
    )
}

export default Adduser;
