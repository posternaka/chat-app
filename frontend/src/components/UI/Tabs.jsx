import React from 'react'

const Tabs = ({ children  }) => {
  return (
    <div className="tabs is-toggle is-centered">
        <ul>
            {children}
        </ul>
    </div>
  )
}

export default Tabs