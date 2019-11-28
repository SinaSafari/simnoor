import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './reducers/rootReducer'
import rootSaga from './sagas'

export const configureStore = preloadedState => {

    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [sagaMiddleware]

    const middlewareEnhancer = applyMiddleware(...middlewares)

    const storeEnhancer = [middlewareEnhancer]


    const composedEnhancer = compose(...storeEnhancer)


    const rootReducerEnhancer = rootReducer


    const store = createStore(
        rootReducerEnhancer,
        // preloadedState,
        composedEnhancer,
    )

    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}
