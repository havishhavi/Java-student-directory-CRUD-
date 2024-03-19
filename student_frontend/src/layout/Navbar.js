import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/home"}>Student Directory</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="row">
                        <div className="col">
                            <Link type="button" class="btn btn-outline-dark" to="/addstudent">Add Student</Link>
                        </div>
                        <div className="col">
                            <Link type="button" className="btn btn-outline-dark" to="/">Logout</Link>
                        </div>
                    </div>



                </div>
            </nav>

        </div>
    )
}

export default Navbar