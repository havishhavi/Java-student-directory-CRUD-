import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewStudent = () => {

    const [data, setData] = useState({
        studentName: "",
        studentEmail: "",
        studentAddress: ''
    })
    const { studentName, studentEmail, studentAddress } = data;
    const { id } = useParams();
    useEffect(() => {
        loadStudent()

    }, []);

    const loadStudent = async () => {
        const result = await axios.get(`http://localhost:8081/api/students/${id}`);
        setData(result.data);
    }

    return (
        <div class="container-md">
            <div className="row">
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
                    <h2 className='text-center m-4'>Student Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Details of student id: {data.id}
                            <ul className='list-group list-froup-flush'>
                                <li className='list-group-item'>
                                    <b className="mx-2">Name:</b>
                                    {studentName}
                                </li>
                                <li className='list-group-item'>
                                    <b className="mx-2">E-mail:</b>
                                    {studentEmail}
                                </li>
                                <li className='list-group-item'>
                                    <b className="mx-2">Address:</b>
                                    {studentAddress}
                                </li>
                            </ul>

                        </div>
                    </div>
                    <Link className="btn btn-outline-secondary btn-lg mx-2" to={"/home"}>Go Home</Link>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent