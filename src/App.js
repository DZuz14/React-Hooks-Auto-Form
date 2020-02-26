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
    <div>
      <AutoForm form={config} onSubmit={handleSubmit} status={status} />
    </div>
  )
}

export default App
