import React from 'react'
import TNavbar from '../teacher/TNavbar'

const Home1 = () => {
    return (
        <div>
            <TNavbar />


            <div class="container-md">
                <div className="row">
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
                        <h2 className='text-center m-4'>Welcome to the home directory of students</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home1