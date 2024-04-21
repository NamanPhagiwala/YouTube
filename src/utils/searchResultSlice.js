import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResults",
  initialState: {},
  reducers: {
    cacheSearchResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheSearchResults } = searchResultSlice.actions;

export default searchResultSlice.reducer;
