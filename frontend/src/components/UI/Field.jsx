import React from 'react'

const Field = ({ fieldName, className, children, ...props }) => {
  return (
    <div className={className}>
        <div className="field-label is-normal">
            <label className="label">{fieldName}</label>
        </div>
        <div className="field-body">
            <div className="field">
                <p className="control">
                    <input className='input' type="text" {...props} />
                    {children}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Field;