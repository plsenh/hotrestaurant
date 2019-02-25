import React from 'react'

export function Jumbotron (props) {
  return (
    <div
      style={{
        height: 300,
        clear: 'both',
        paddingTop: 120,
        textAlign: 'center'
      }}
      className='jumbotron'
    >
      <h1 className='text-center'>
        <span className='fa fa-fire' /> {props.headerName}
      </h1>
      <hr />
      <h2 className='text-center'>{props.lead}</h2>
      <br />
      {props.children}
    </div>
  )
}
