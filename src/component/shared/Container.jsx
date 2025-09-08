import React from 'react'

function Container({ children, className }) {
  return (
    <div className={'mx-auto max-w-7xl p-2 ' + className}>
      {children}
      
    </div>
  )
}

export default Container
 