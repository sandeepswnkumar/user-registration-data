import React, { useState } from 'react'
import xlsx from 'xlsx'
import TableHead from './TableHead'
import TableData from './TableData'
import axios from '../Axios';
import DataFormate from '../formate/dataFormate.xlsx';
import { useHistory } from 'react-router';

const Upload = () => {


    const history = useHistory();
    const [userData, setUser] = useState([]);


    const inputFile = (e) => {

        let files = e.target.files[0];
        const fileName = files.name;
        const extension = fileName.split('.').pop();
        if(extension === 'xlsx'){
            const reader = new FileReader();
            reader.onload = (evt) => {

                const data = evt.target.result;

                let readedData = xlsx.read(data, { type: 'binary' });

                let sheetName = readedData.SheetNames[0];
                let workBook = readedData.Sheets[sheetName];
                const jsonData = xlsx.utils.sheet_to_json(workBook);
                console.log(jsonData)
                setUser(jsonData);
            }
            reader.readAsBinaryString(files)
        }
        else{
            alert("Dose not Read Data only read excel file with .xlxs or .xls");
            return;
        }


    }


    console.log(userData);



    const uploadUser = async () => {

        if (userData.length === 0) {
            alert("No data to upload")
            return;
        }



        try {

            const res = await axios.post('/uploadeUsers', userData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            console.log("res")
            console.log(res)

            if (res.status === 200) {
                alert('User Uploaded Successfully')
                history.push('/');
            }



        } catch (error) {
            alert(error);
        }

    }

    return (
        <div className='text-center'>
             
                
            <div className='uploadContainer'>

                <h1>Upload User Excel File</h1>
                <div className="btnS">
                    <input type="file" onChange={inputFile} accept=".xlsx, .xls" />
                    <button onClick={uploadUser} className="uploadBtn">Upload</button>
                    <a href={DataFormate} download><button className="uploadBtn">Download</button></a>
                </div>

            </div>
            <div className="table" style={{ width: "80%" }}>
                <TableHead />
               

                {userData.map((data, index) =>
                    <TableData key={index} sl={index + 1} name={data.name} email={data.email} mobile={data.mobile} gender={data.gender} status={data.status} id={data._id} />
                )}
            </div>
        </div>
    )
}

export default Upload
