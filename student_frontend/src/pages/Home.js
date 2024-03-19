import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../layout/Navbar';

const Home = () => {
    const { id } = useParams()
    const [students, setStudents] = useState([]);
    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const result = await axios.get("http://localhost:8081/api/students");
        setStudents(result.data);
    };
    const deleteStudent = async (id) => {
        await axios.delete(`http://localhost:8081/api/students/${id}`)
        loadStudents()
    }



    return (
        <div>
            <Navbar />


            <div className="container">
                <div className='py-4'>
                    <table className="table table-dark table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Address</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{student.studentName}</td>
                                        <td>{student.studentEmail}</td>
                                        <td>{student.studentAddress}</td>
                                        <td>
                                            <Link className="btn btn-primary " to={`/editstudent/${student.id}`}>Edit </Link>
                                            <Link className="btn btn-outline-info mx-2" to={`/viewstudent/${student.id}`}>View </Link>
                                            <button type="button" class="btn btn-danger mx-2" onClick={() => deleteStudent(student.id)}>Delete</button>
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

export default Home