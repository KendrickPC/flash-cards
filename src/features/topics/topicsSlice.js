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
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: [],
      };
    },
    addQuizIdForTopic: (state, action) => {
      const { topicId, quizId } = action.payload;
      state.topics[topicId].quizIds.push(quizId)
      
    },

  }
})

export const selectTopics = (state) => state.topics.topics;
// action creators export
export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
// export reducer that our slice generates
export const topicsReducer = topicsSlice.reducer;
