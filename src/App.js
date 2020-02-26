/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
import AutoForm from './components/AutoForm'
import form from './forms'

const App = () => {
  const [status, setStatus] = useState(null)

  const handleSubmit = form => {
    console.log(form)
    setStatus('loading')

    setTimeout(() => {
      setStatus('success')
      // setStatus('error')
    }, 3000)
  }

  return (
    <div
      style={{
        padding: '125px 0 0 80px'
      }}
    >
      <h1
        css={css`
          color: #fff;
          font-size: 56px;
          margin: 0 0 15px;
        `}
      >
        Get VIP Access
      </h1>

      <AutoForm form={form} onSubmit={handleSubmit} status={status} />
    </div>
  )
}

export default App
