import React from 'react'

const Message = ({ children, theme, ...props}) => {
  return (
    <article className="message is-small is-link">
        <div className="message-header is-justify-content-flex-start" {...props}>
            <span className="has-text-warning mr-2">theme: </span><span>{theme}</span>
        </div>
        {children}
    </article>
  )
}

export default Message;