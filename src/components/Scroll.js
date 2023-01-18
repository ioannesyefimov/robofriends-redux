import React from "react";

const Scroll = (props) => {
    return (
        <div style={{marginTop: '3rem', overflowY: 'scroll', border: "3px solid black", height: "550px", padding:'2rem 4rem' }}>
            {props.children}
        </div>
    )
    
}

export default Scroll;