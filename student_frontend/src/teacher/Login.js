import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [data,setData] = useState ({
        teacherEmail:"",
        teacherPassword:""
    });
    const navigate = useNavigate();
    const{teacherEmail,teacherPassword} = data;

    const onChange1 = e => { setData({ ...data, [e.target.name]: e.target.value }) };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/api/teachers/login",data).then((res)=> {
                console.log(res.data);
                if(res.data.message === "Email not found"){
                    alert("Email not found");
                }
                else if(res.data.message === "Login success" ){
                    navigate("/home");
                }
                else {
                    alert("Incorrect email and password.. Try again");
                }
            }, fail => {
                console.error(fail);
            });
            
        } catch (error) {
            alert(error);
            
        }
    }



  return (
    <div class="container-md">
            <div className="row">
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
                    <h2 className='text-center m-4'>Teacher Login </h2>
                    <div className='md-4'>
                        <form onSubmit={(e) =>  onSubmit(e) }>
                            <div className='md-4'>
                                <label htmlFor='teacherEmail' className='form-label'>
                                    E-mail:
                                </label>
                                <input type={"email"} className='form-control' placeholder='E-mail address' name='teacherEmail' value={teacherEmail} onChange={(e) => onChange1(e)} />

                                <label htmlFor='teacherPassword' className='form-label'>
                                    Password:
                                </label>
                                <input type={"password"} className='form-control' placeholder='password' name='teacherPassword' value={teacherPassword} onChange={(e) => onChange1(e)} />
                            
                                <button type="Submit" className="btn btn-outline-primary btn-lg">Login</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>
  )
}

export default Login