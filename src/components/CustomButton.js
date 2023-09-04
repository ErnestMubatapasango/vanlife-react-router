import React from 'react'

function CustomButton({title, handleClick, containerStyles}) {
  return (
    <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
           {title}
        </span>
    </button>
  )
}

export default CustomButton