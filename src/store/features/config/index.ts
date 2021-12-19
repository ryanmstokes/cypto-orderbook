import { createSlice } from '@reduxjs/toolkit'
import config from 'store/features/config/initial-state'
import { ConfigPayload } from 'types'

export const configSlice = createSlice({
  name: 'config',
  initialState: config,
  reducers: {
    loadConfig: (state, action: ConfigPayload) => {
      return action.payload
    },
  },
})

export const { loadConfig } = configSlice.actions

export default configSlice.reducer
