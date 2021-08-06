import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {
      // Will eventually hold all topics keyed by id
    }
  },
  reducers: {
    addTopic: (state, action) => {
      // topics keyed by id
      state.topics[action.payload.id] = {
        id: action.payload.id,
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: [],
      }
    }
  }
})

export const selectTopics = (state) => state.topics.topics;
export const topicsReducer = topicsSlice.reducer;
export const { addTopic } = topicsSlice.actions;