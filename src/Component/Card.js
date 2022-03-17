import React from 'react'
import { GithubContext } from '../Context/Context'
import {MdBusiness,MdLocationOn,MdLink} from 'react-icons/md'
const Card = ()=>{

    const {githubUser} = React.useContext(GithubContext);

    const {avatar_url,html_url,name,company,blog,bio,location,twitter_username}=githubUser;

    return(
        
            <div className="card">
            <div className="text-center">
            <img src={avatar_url} className="card-img-top avatar" alt="avatar" />
            </div>    
            <div className="card-body position-relative">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-info">@{twitter_username || "N/A"}</p>
                <div className="position-absolute top-0 end-0 p-2">
                    <a href={html_url} className="btn btn-outline-info mt-2" style={{borderRadius:'100px'}}>Follow</a>
                </div>
                <p>{bio}</p>
                <p style={{marginTop:'-10px'}}><MdBusiness /> {company}</p>
                <p style={{marginTop:'-10px'}}><MdLocationOn /> {location || 'Earth'}</p>
                <p style={{marginTop:'-10px'}}><a href={`https://${blog}`} style={{textDecoration:'none'}}><MdLink />{blog}</a></p>
            </div>
            </div>

    )
}
export default Card