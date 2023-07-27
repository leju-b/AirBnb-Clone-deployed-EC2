import React from "react";
import './section1.css'

const Section_one = (props) => {
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === "Online"){
        badgeText = "Online"
    } 
    return(
            <div className="card-one">
                {badgeText && <div className="bText">{badgeText}</div>}
                <img src="./images/image 12.png" alt="" className="CoverImg"/>
                <div className="card--details">
                    <p className="star"><img src="./images/Star 1.png" alt="" className="starImg" /> <span><strong>{props.stats.rating} </strong></span>({props.id}) - {props.location}</p>
                    <p className="summary">{props.title}</p>
                    <p className="price"><strong><span>From </span><span className="price">${props.price}</span></strong> / person</p>
                </div>
            </div>
    )
}

export default Section_one