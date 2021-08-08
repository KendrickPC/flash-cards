import { createSlice } from "@reduxjs/toolkit";

export const topicSlice = createSlice({
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
    },
    addQuizIdToTopicId: (state, action) => {
      // Hint: Use the payload’s topicId to find the correct topic in state, 
      state.topics[action.payload.topicId].quizIds.push(action.payload.id)
    },

  }
})

export const selectTopics = (state) => state.topics.topics;
export const topicsReducer = topicSlice.reducer;
export const { addTopic, addQuizIdToTopicId } = topicSlice.actions;