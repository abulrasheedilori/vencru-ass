import React, { memo } from 'react'

function Item(props) {
  return (
    <div className="flex justify-start items-center p-1 mr-5  hover:bg-purple-900 hover:text-white font-bold shadow-sm rounded hover:transition-all hover:duration-700 hover:ease-in">
        <img className="mr-2" src={props.navLink.image} width="20" height="20" alt="support" />
        <span className="text-1xl">{props.navLink.title}</span>
    </div>
  )
}

export default memo(Item)