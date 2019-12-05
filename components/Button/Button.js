import React from 'react'
function Button({ title }) {
    return (
        <div>
            <a >{title}</a>
            <style jsx>{`
        a{
            float: right;
            font-size: 10px;
            border: 1px solid #ffc001;
            padding: 8px;
            color: white;
            transition: all 0.3s ease-in-out
        }
        a:hover{
            color: black;
            border: 1px solid white;
            background-color: white;
        }
        `}

            </style>
        </div>
    )
}

export default Button