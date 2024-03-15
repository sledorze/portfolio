import React, { useEffect } from 'react'

const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    if (head) {
      head.appendChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minHeight: '650px', width: '100%' }}
    ></div>
  )
}

export default CalendlyEmbed
