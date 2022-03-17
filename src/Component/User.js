import React from 'react'
import Card from './Card'
import Info from './Info'
import Followers from './Followers'
import Repos from './Repos'
const User=()=>{
    return(
        <div className="container-fluid mt-1">
            <div className="row">
                <div className="col-lg-3 p-1">
                <Card />
                <Followers />
                </div>
                <div className="col-lg-9 p-1">
                <Info />
                <Repos />   
                </div>
            </div>
        </div>
    )
}
export default User