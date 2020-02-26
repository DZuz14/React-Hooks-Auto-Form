export default {
  config: {
    buttonText: 'Send',
    messages: {
      success: 'We received your message! Thanks for inquiring.',
      error:
        'An error occurred during submittal. Please contact us at support@xyz.com'
    },
    spinner: true
  },
  fields: [
    {
      label: 'Name',
      placeholder: 'Dana Scully',
      required: true
    },
    {
      label: 'Location',
      placeholder: 'New York, NY',
      required: true
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'xyz@gmail.com',
      required: true
    },
    {
      label: 'Message',
      type: 'textarea',
      placeholder: 'Enter your message...',
      required: true
    }
  ]
}
