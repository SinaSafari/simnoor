import React from 'react'
function Button({ title, classes }) {
    return (
        <div className={classes}>
            <button>{title}</button>
            <style jsx global>{`
        button{
            font-size: 16px;
            background-color: #ffc001;
            border: 1px solid #000;
            padding: 8px;
            color: white;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            text-shadow: 1px 1px #000;
        }
        button:hover{
            color: black;
            border: 1px solid white;
            background-color: white;
            text-shadow: 0px 0px #000;
        }
        `}

            </style>
        </div>
    )
}

export default Button