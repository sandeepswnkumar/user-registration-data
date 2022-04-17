import React from 'react'
import { NavLink } from 'react-router-dom'

const TableData = ({sl, name, email, mobile, gender, status, id, deleteUser }) => {
    return (
        <div className="tableData" >
            <div className="tableCell" data-title='S.No. : '>
                {sl}
            </div>
            <div className="tableCell" data-title='Name : '>
                {name}
            </div>
            <div className="tableCell" data-title='Email : '>
                {email}
            </div>
            <div className="tableCell" data-title='Contact : '>
                {mobile}
            </div>
            <div className="tableCell" data-title='Gender : '>
                {gender}
            </div>
            <div className="tableCell" data-title='Status : '>
                {status}
            </div>
            <div className="tableCell" data-title='Actions : '>
                <div className="actions">
                    <NavLink to={`/updateuser/?id=${id}`}><i className="fas fa-edit" title="edit"  ></i></NavLink>
                    <NavLink to='/'><i className="fas fa-trash" title="delete" onClick={() => deleteUser(id)} ></i></NavLink>
                </div>
            </div>
        </div>
    )
}

export default TableData
