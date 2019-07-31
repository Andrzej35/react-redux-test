import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css'

import App from './components/App'

import reducers from './reducers'
import Async from './middlewares/async'

const logger = createLogger()

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(Async, logger))(createStore)

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root'))
