import React from "react"  
import Photo from "../images/al-bundy.jpg"
 
export default function Info() { 
    return ( 
        <div className="owner"> 
            <img className='owner__photo' src={Photo} /> 
                <h1 className='owner__name'>All Bundy</h1> 
                <h4 className='owner__position'>Women's Shoe Salesman</h4> 
                <a className='owner__website' href="#">albundy.website</a> 
                <div className='owner__contact'>  
                    <button className='owner__email'><i className="fas fa-envelope"></i>Email</button> 
                    <button className='owner__linkedin'><i className="fab fa-linkedin"></i> LinkedIn</button>
                </div>
        </div>
    )
}