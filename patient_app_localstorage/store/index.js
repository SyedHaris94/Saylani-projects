import React from 'react'
import {createStore} from 'redux'
import {combineReducer, applyMiddleWare} from 'redux'
import thunk from 'thunk'
import patientData from './reducer/reducer.js'

const middleWare = applyMiddleWare(thunk)
var combineReducer = combineReducer({patientData})
let store = createStore(combineReducer,middleWare);
store.subscribe(()=>
    console.log(store.getState())
)

export default store;