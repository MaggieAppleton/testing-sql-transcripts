import React from 'react'

const Link = props => {
  return (
    <div class='fancylink'>
      <a target='_blank' href='{props.url}'>
        {props.urlname}
      </a>
    </div>
  )
}

export default Link
