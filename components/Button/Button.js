import React from 'react'
function Button({ title, classes, styles, btnclass }) {
    return (
        <div className={classes}>
            <button className={btnclass} style={{ ...styles }}>{title}</button>
            <style jsx global>{`
            button{
                font-size: 16px;
                background-color: #b44501;
                border: 1px solid #000;
                border-radius: 5px;
                padding: 8px;
                color: white;
                transition: all 0.3s ease-in-out;
                cursor: pointer;
                text-shadow: 1px 1px #000;
            }
            button:hover{
                color: black;
                border: 1px solid black;
                background-color: white;
                text-shadow: 0px 0px #000;
            }
        `}

            </style>
        </div>
    )
}

export default Button