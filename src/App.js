import React, { useState } from 'react'
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
        padding: '175px 0 0 80px'
      }}
    >
      <h1>GET VIP ACCESS</h1>

      <AutoForm form={form} onSubmit={handleSubmit} status={status} />
    </div>
  )
}

export default App
