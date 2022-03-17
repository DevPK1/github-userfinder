import React from 'react'
import { GithubContext } from '../Context/Context'
import { GoRepo,GoGist } from "react-icons/go"
import { FiUsers,FiUserPlus} from "react-icons/fi";
const Info=()=>{
    const {githubUser} = React.useContext(GithubContext);
    const {public_repos,followers,following,public_gists} = githubUser;

    const items=[
        {
            id:1,
            icon:<GoRepo className/>,
            label:'repos',
            value:public_repos,
            color:'danger'
        },
        {
            id:2,
            icon:<FiUsers />,
            label:'followers',
            value:followers,
            color:'success'
        },
        {
            id:3,
            icon:<FiUserPlus />,
            label:'following',
            value:following,
            color:'primary'
        },
        {
            id:4,
            icon:<GoGist />,
            label:'gists',
            value:public_gists,
            color:'warning'
        }
    ]
    return(
            <div className="row col row-cols-2 row-cols-lg-4 g-2 g-lg-1">
            {
            items.map((item)=>{
                return <Item key={item.id} {...item} />
            })
            }</div>
    )
}

const Item = ({icon,label,value,color})=>{
    return(
        
            <div className="col">
                <div className="p border bg-light repos-wrapper">
                <div className="d-flex">
                    <span className={`icon text-${color}`}>{icon}</span>
                    <div style={{marginLeft:'20px'}}>
                        <h5 className="mt-2">{value}</h5>
                        <h6>{label}</h6>
                    </div>
                    </div>
                </div>
            </div>
    )
}
export default Info