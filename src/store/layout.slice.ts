import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ILayoutState {
  isShowedSidebar: boolean
}

const initialState: ILayoutState = {
  isShowedSidebar: true
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isShowedSidebar = !state.isShowedSidebar
    },
    setSidebarVisibility: (state, action: PayloadAction<boolean>) => {
      state.isShowedSidebar = action.payload
    }
  }
})

export const { toggleSidebar, setSidebarVisibility } = layoutSlice.actions
export type { ILayoutState }
