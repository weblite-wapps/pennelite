import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './root'

const renderPennelite = () =>
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    window.document.getElementById('root'),
  )

renderPennelite()
if (module.hot) module.hot.accept('./root', renderPennelite)
