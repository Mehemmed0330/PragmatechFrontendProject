import React from 'react'
import IUni from "./IUni"

const UniComponent = (props: { uni: IUni }) => {
    const {uni} = props
  return (
      <div>{uni.country}</div>
  )
}

export default UniComponent