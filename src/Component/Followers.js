import React from 'react'
import { GithubContext } from '../Context/Context';
const Followers = ()=>{

    const {followers} = React.useContext(GithubContext);
    
    return(
        <div>
            <h5 className="p-3">Followers</h5>
            <div className="col followers">
            {
            followers.map((follower)=>{
                const{avatar_url:img,html_url,login} = follower;
                return(
                    
                        <div className="p-2 border bg-light" key={follower.id}>
                            <div className="d-flex mt-3">
                                <img src={img} alt="avatar" className="img-fluid" style={{height:'40px',width:'40px',borderRadius:'100%'}} />
                                <div style={{marginLeft:'10px'}}>
                                    <h6>{login}</h6>
                                    <p style={{marginTop:'-10px'}}><a href={html_url} style={{textDecoration:'none'}}>{html_url}</a></p>
                                </div>
                            </div>
                        </div>
                )
            })
        }
        </div>
        </div>
    )
}
export default Followers