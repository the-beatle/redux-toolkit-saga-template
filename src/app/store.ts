import {configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga"

import catsReducer from "../features/cats/catsSlice"
import catSaga from "../features/cats/catSaga"

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


export function makeStore() {
    const store = configureStore({
        reducer: {cats: catsReducer},
        middleware
    })
    sagaMiddleware.run(catSaga)
    return store
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>>

export default store