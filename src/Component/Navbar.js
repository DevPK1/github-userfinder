import React from 'react'
import { BsGithub } from "react-icons/bs";
import Search from './Search'
const Navbar =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><h5><BsGithub /> Github User</h5></a>
    <Search />
  </div>
</nav>
    )
}
export default Navbar