import React from 'react'
import {Link} from 'react-router-dom'
const Error=()=>{
    return(
        <div className="container error-wrapper">
            <h1>404</h1>
            <h3>Sorry,page not found.</h3>
            <Link to="/"><button className="btn btn-primary">HOME</button></Link>
        </div>
    )
}
export default Error