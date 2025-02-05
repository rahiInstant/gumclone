import React from 'react'

function Node({data}) {
  return (
    <div className={` w-full h-full`}>{data.label}</div>
  )
}

export default Node