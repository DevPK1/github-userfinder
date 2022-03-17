import React from 'react'
import {Info,Navbar,Repos,Search,User,Footer} from "../Component"
import Loading from '../Component/Loading'
import { GithubContext } from '../Context/Context'
const Dashboard=()=>{

    const {isLoading} = React.useContext(GithubContext)

    if(isLoading){
        return <div>
            <Navbar />
            <Loading />
        </div>
    }
    return(
        <div>
            <Navbar />
            <User />  
            <Footer />       
        </div>
    )
}
export default Dashboard