import React, { Component } from 'react'

export default class RecognitionDetails extends Component {
    render() {
        return (
            <div>
            <div>
            <input 
            type="text"
            id="awards" style={inputboxAwards}
            placeholder="Enter Your Recognitions"
            required></input>   
            </div>
            <div  style={attachawards}>
            <h2 style={addmoreawards}>Attach your recognitions</h2>
            </div>
            </div>
        )
    }
}


const inputboxAwards={
marginTop:"2px",    
marginLeft: "-9px",
marginRight: '-9px',
width: '340px',
fontSize:"15px",
height: '50px',
background: '#F2F2F2 0% 0% no-repeat padding-box',
borderRadius: '6px',
opacity: '1'
}

const attachawards={
width: "340px",
height: "70px",
border: "1px dashed #BFBFBF",
bordeRadius: "6px",
marginLeft:"-10px",
marginBottom:"24px",
marginTop:"23px",
opacity: "1"
}

const addmoreawards={
    marginBottom:"24px",
    marginTop:"7px",
width: "214px",
height: "19px",
marginLeft: "90px",
marginRight: "117px",
textAlign:"left",
font: "normal normal bold 16px/19px Lato",
letterSpacing: "0px",
color: "#B3BCC7",
opacity: "1"  
}