import React from 'react'
import { GithubContext } from '../Context/Context';
const Search=()=>{

    const [user,setUser] = React.useState('');
    const {request,error,searchGithubUser,isLoading} = React.useContext(GithubContext)
    //get things from global context

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(user){
            searchGithubUser(user)
        }
        
    }

    return(
        <div className="container col-lg-6" style={{textAlign:'center'}}>
            <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" 
            type="text" placeholder="enter github user" 
            value={user}
            onChange={(e)=>setUser(e.target.value)}
            />
            {request > 0 && !isLoading && (<button className="btn btn-outline-success" type="submit" >Search</button>)
            
            }
            
            <h6 style={{padding:'5px',marginLeft:'10px'}}>Requests : {request} / 60</h6>
            </form>
            {error.show && <span className="text-danger" style={{textAlign:'center',fontSize:'14px'}}>{error.msg}</span>}
        </div>
    )
}
export default Search