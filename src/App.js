/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
import AutoForm from './components/AutoForm'
import config from './config'

const App = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = form => {
    setStatus('loading')

    setTimeout(() => {
      setStatus('success')
    }, 3000)
  }

  return (
    <div css={ContainerCSS}>
      <h1>Get VIP Access</h1>
      <AutoForm form={config} onSubmit={handleSubmit} status={status} />
    </div>
  )
}

const ContainerCSS = css`
  padding: 125px 0 0 80px;

  h1 {
    color: #fff;
    font-size: 56px;
    margin: 0 0 15px;
  }
`

export default App
