import React from 'react'

const linkStyle = {
  border: '1px solid #666',
  borderRadius: '10px',
  width: '300px',
  padding: '20px',
  textAlign: 'center',
  margin: '0 auto',
}

const Link = props => {
  return (
    <div style={linkStyle}>
      <a href='{props.url}'>{props.urlname}</a>
    </div>
  )
}

export default Link
