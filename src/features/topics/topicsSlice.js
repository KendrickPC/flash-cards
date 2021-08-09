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
      const { id, name, icon } = action.payload;
      // topics keyed by id
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        // quizIds property from step 6e
        quizIds: [],
      }

    },
    addQuizIdToTopic: (state, action) => {
      // Hint: Use the payload’s topicId to find the correct topic in state, 
      state.topics[action.payload.topicId].quizIds.push(action.payload.id)
    },

  }
})

export const selectTopics = (state) => state.topics.topics;
// action creators export
export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
// export reducer that our slice generates
export default topicsSlice.reducer;
