import { configureStore } from './ConfigStore'


const store = configureStore()
const { dispatch } = store

const makeStore = () => {
    return store
}

export { makeStore, dispatch }