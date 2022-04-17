import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import axios from '../Axios';


const Updateuser = () => {
    const location = useLocation();
    const history = useHistory();
    const query = location.search.substring(4);
    const [userData, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        gender: "",
        status: ""
    });


    const updateUser = async () => {

        try {
            const res = await axios.put(`/user/?id=${query}`);
           
            if(res.status===400){
                console.log("not found")
                return;
            }
            if (!res.data) {
                alert("user Not Avaliable")
            }

            setData(...userData, res.data.user)

        } catch (error) {
            alert(error)
            history.push('/')
        }
    }

    const updateData = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.put(`/user/?id=${query}`, userData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            if (res.status === 200) {
                alert('User Updated Successfully')
                history.push('/');
            }
        } catch (error) {
            alert(error)

        }

    }

    useEffect(() => {
        updateUser();
    }, [])



    const inputData = (e) => {  
        setData({ ...userData, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">
            <div className="back">
                <NavLink to='/'> <button><i className="fas fa-angchecked={}"></i> All Users</button></NavLink>
            </div>
            <div className="head">
                <h3>Update User</h3>
                <p>Use the below from to Update a account</p>
            </div>
            <form className="fromData" onSubmit={updateData}>
                <div className="formgroup">
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" placeholder="Name" name="name" onChange={inputData} value={userData.name} />
                </div>
                <div className="formgroup">
                    <label htmlFor="name">Email :</label>
                    <input type="email" id="name" placeholder="Email" name="email" onChange={inputData} value={userData.email} />
                </div>
                <div className="formgroup">
                    <label htmlFor="name">Mobile No :</label>
                    <input type="text" id="name" placeholder="Mobile No." name="mobile" onChange={inputData} value={userData.mobile} />
                </div>
                <div className="formgroup">
                    <div className="gender">
                        <label htmlFor="name" className='genderHead'>Gander :</label>
                        <div className="gender_item">
                            <input type="radio" id="male" name='gender' onChange={inputData} value="MALE" checked={userData.gender === "MALE" ? true : ''} />
                            <label htmlFor="male" >Male</label>
                            <input type="radio" id="female" name='gender' onChange={inputData} value="FEMALE" checked={userData.gender === "FEMALE" ? true : ''} />
                            <label htmlFor="female">Female</label>
                        </div>

                    </div>
                </div>
                <div className="formgroup">
                    <div className="status">
                        <label htmlFor="name" className='statusHead'>Status :</label>
                        <div className="status_item">
                            <input type="radio" id="active" name='status' value="ACTIVE" onChange={inputData} checked={userData.status === "ACTIVE" ? true : false} />
                            <label htmlFor="active">Active</label>
                            <input type="radio" id="inactive" name='status' value="INACTIVE" onChange={inputData} checked={userData.status === "INACTIVE" ? true : false} />
                            <label htmlFor="inactive">Inactive</label>
                        </div>

                    </div>
                </div>
                <button className='save'>Save</button>
            </form>
        </div>
    )
}

export default Updateuser
