import React,{useState,useEffect} from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const rooturl="https://api.github.com"

const GithubContext = React.createContext()

const GithubProvider =({children})=>{
    const [githubUser,setGithubUser] = useState(mockUser);
    const [repos,setRepos] = useState(mockRepos);
    const [followers,setFollowers] = useState(mockFollowers);

   //request Loading

   const[request,setRequest] = useState(0);
   const[isLoading,setIsLoading]=useState(false);
   const [error,setError] = useState({show:false,msg:''});
   //check rate
   const checkRequest=()=>{
       axios(`${rooturl}/rate_limit`)
       .then(({data})=>{
           let  {rate:{remaining}}=data;
           setRequest(remaining)
           if(remaining === 0){
               toggleError(true,"Sorry,You have exceeded your hourly rate limit !")
           }
       })
       .catch((err)=>console.log(err));
   }

   const searchGithubUser= async(user)=>{
    toggleError();
    setIsLoading(true)
    const response = await axios(`${rooturl}/users/${user}`).catch(err=>console.log(err))
    if(response){
        setGithubUser(response.data);
        const {login,followers_url} = response.data;
        //repos
        axios(`${rooturl}/users/${login}/repos?per_page=100`).then(response=>setRepos(response.data))
        //followers
        axios(`${followers_url}?per_page=100`).then(response=>setFollowers(response.data))
    }
    else{
        toggleError(true,'There is no user with that username.')
    }
    checkRequest();
    setIsLoading(false);
}

   function toggleError(show=false,msg=""){
       setError({show,msg})
   }
   useEffect(checkRequest,[]);

    return(
        <GithubContext.Provider value={{githubUser,repos,followers,request,error,searchGithubUser,isLoading}}>
            {children}
        </GithubContext.Provider>
    )
}
export {GithubProvider,GithubContext}