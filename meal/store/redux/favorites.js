import { createSlice } from "@reduxjs/toolkit"

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      //通过action.payload来获取数据
      state.ids.push(action.payload.id)
    },
    removeFavorite: (state) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    },
  },
})

export const addFavorite = favoriteSlice.actions.addFavorite
export const removeFavorite = favoriteSlice.actions.removeFavorite
export default favoriteSlice.reducer //获取数据
