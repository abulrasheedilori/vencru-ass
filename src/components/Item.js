import React, { memo } from 'react'

function Item(props) {
  return (
    <div className="flex justify-start items-center">
        <img className="mr-2" src={props.navLink.image} width="20" height="20" alt="support" />
        <span className="text-1xl">{props.navLink.title}</span>
    </div>
  )
}

export default memo(Item)