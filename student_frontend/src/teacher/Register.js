import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const [data,setData] = useState ({
        teacherName:"",
        teacherEmail:"",
        teacherPassword:"",
        confirmPassword:"",
        error:""
    });
    const navigate = useNavigate();

    const {teacherName, teacherEmail, teacherPassword,confirmPassword,error  } = data;

    const onChange1 = e => { setData({ ...data, [e.target.name]: e.target.value }) };

    const onSubmit = async e => {
        e.preventDefault();
        if (teacherPassword !== confirmPassword) {
          setData({ ...data, error: 'Passwords do not match' });
        } else {
            try {
                await axios.post("http://localhost:8081/api/teachers/save",data);
                alert("Registration Successfull.");
                console.log('Registration submitted');
                navigate("/login");
            } catch(err) {
                alert(err)
            }
            
        }
      };

    return (
        <div class="container-md">
            <div className="row">
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
                    <h2 className='text-center m-4'>Register Teacher</h2>
                    <div className='md-4'>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <label htmlFor='teacherName' className='form-label'>
                                Name:
                            </label>
                            <input type={"text"} className='form-control' placeholder='Full name' name='teacherName' value={teacherName} onChange={(e) => onChange1(e)} />
                            <div className='md-4'>
                                <label htmlFor='teacherEmail' className='form-label'>
                                    E-mail:
                                </label>
                                <input type={"email"} className='form-control' placeholder='E-mail address' name='teacherEmail' value={teacherEmail} onChange={(e) => onChange1(e)} />
                                <div className="md-4">
                                    <label htmlFor="teacherPassword" class="form-label">Password:</label>
                                    <input type={"password"} class="form-control" id="inputAddress" name='teacherPassword' placeholder="Password" value={teacherPassword} onChange={(e) => onChange1(e)} />
                                </div >
                                <div className="md-4">
                                    <label htmlFor='confirmPassword' className='form-label'>Confirm Password:</label>
                                    <input type="password" className="form-control" name='confirmPassword' placeholder="Confirm Password" value={confirmPassword} onChange={onChange1} />
                                    {error && <div className="alert alert-danger mt-2">{error}</div>}
                                </div>
                                <button type="Submit" className="btn btn-outline-primary btn-lg">Register</button>
                                <Link className="btn btn-outline-secondary btn-lg mx-2" to={"/"}>Cancel</Link>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Register