import {configureStore} from '@reduxjs/toolkit'
import reducer from '../feature/combineReducers'

export const store = configureStore({reducer});