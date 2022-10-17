import React from "react"; 

export default function Noti(props){
    
    function handleChange(){
        let filteredData = props.idata.map(item => {
            if(item.id == props.element.id){
                item.status = false
                return item
            } 
            else return item
        })
        props.setIData(filteredData)
    }
    return(
        <div className={props.element.status ? "blue noti-container" :"noti-container"} onClick={handleChange}>
            <div className="noti">
                {props.element.status && <div className="dot"></div>}
                <img className="profile-image" src={props.element.profile_url} alt="" />
                <p><span className="name">{props.element.profile_name}</span>
                <span className="para">{props.element.paragraph}</span>
                <span className="topic">{props.element.topic}</span></p>
                
                <span className="time">({props.element.time})</span>
            </div>
            {/* <hr /> */}
        </div>    
    )
}