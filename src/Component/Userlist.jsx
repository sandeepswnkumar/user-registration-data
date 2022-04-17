import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import TableHead from './TableHead'
import TableData from './TableData'
import axios from '../Axios';


const Userlist = () => {

    const [data, setData] = useState([]);

    const bachendData = async () => {

        try {
            
            const res = await axios.get('/users');
            // console.log("res");
            // console.log(res);
            setData(res.data.data);
            

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        bachendData();
    }, [data])



    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`/user/${id}`);
            if (res.data.msg === 'User Deleted') {
                alert("User Deleted Successfully")
                return;
            }
            alert(res.data.msg)
        } catch (error) {
            console.log(error)
        }

    }


    const deleteAll = async () => {

        if (data.length === 0){
            alert("No user to delete")
        }
        
        try {
            const res = await axios.delete('/deleteAll');
            alert(res.data.msg)

        } catch (error) {
            console.log(error)
        }
    }







    return (

        <React.Fragment>
            <div className="container">
                <div className="back moreButton">
                    <NavLink to='/Adduser'><button> Add User </button> </NavLink>
                    <NavLink to='/upload'><button> Upload User </button> </NavLink>
                    <NavLink to='#' onClick={deleteAll}><button> Delete All User </button> </NavLink>
                </div>

                <div className='table'>
                    <TableHead />
                    <div className="tableBody">
                        {data.map((maindata, index) => {
                            return (
                                <TableData key={index} sl={index + 1} deleteUser={deleteUser} name={maindata.name} email={maindata.email} mobile={maindata.mobile} gender={maindata.gender} status={maindata.status} id={maindata._id} />
                            )
                        })}
                    </div>
                </div>
                <p className='totalCOunt'>Total User : {data.length}</p>

            </div >

        </React.Fragment>
    )
}

export default Userlist;
