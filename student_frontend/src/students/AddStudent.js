import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddStudent = () => {

    let navigate=useNavigate()
    const [data, setData] = useState({
        studentName: "",
        studentEmail: "",
        studentAddress: ''
    })
    const { studentName, studentEmail, studentAddress } = data;

    const onChange1 = e => { setData({ ...data, [e.target.name]: e.target.value }) };

    const onSubmit = async(e) => {
        e.preventDefault();
        if(studentName == null){
            alert("Empty fields not accepted")
        } else {
            await axios.post("http://localhost:8081/api/students",data)
            alert("success");
            navigate("/home");

        }
        
    };
    return (
        <div class="container-md">
            <div className="row">
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
                    <h2 className='text-center m-4'>Register Student</h2>
                    <div className='md-4'>
                        <form onSubmit={(e) =>  onSubmit(e) }>
                            <label htmlFor='studentName' className='form-label'>
                                Name:
                            </label>
                            <input type={"text"} className='form-control' placeholder='Full name' name='studentName' value={studentName} onChange={(e) => onChange1(e)} />
                            <div className='md-4'>
                                <label htmlFor='studentEmail' className='form-label'>
                                    E-mail:
                                </label>
                                <input type={"email"} className='form-control' placeholder='E-mail address' name='studentEmail' value={studentEmail} onChange={(e) => onChange1(e)} />
                                <div class="col-12">
                                    <label for="studentAddress" class="form-label">Address:</label>
                                    <input type={"text"} class="form-control" id="inputAddress" name='studentAddress' placeholder="Street City State Country Zipcode" value={studentAddress} onChange={(e) => onChange1(e)} />
                                </div>
                                <button type="Submit" className="btn btn-outline-primary btn-lg">Register</button>
                                <Link className="btn btn-outline-secondary btn-lg mx-2" to={"/home"}>Cancel</Link>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AddStudent