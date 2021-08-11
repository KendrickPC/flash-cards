import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    // This inner quizzes object will eventually hold all quizzes keyed by id.
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
      // Remember, we want the quizzes object to be keyed by quiz id, so insert your newly created quiz object as the value associated with the id you receive in the action’s payload.
      const { id } = action.payload;
      state.quizzes[id] = action.payload;

    }
  }
})

export const addQuizForTopicId = (quiz) => {
  const {topicId, id } = quiz;
  return (dispatch) => {
    // dispatch multiple actions here
    // This action creator will receive a payload of the form
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizIdForTopic( {topicId: topicId, quizId: id} ));
  };
};

// Export of selector
export const selectQuizzes = (state) => state.quizzes.quizzes;
// Export of action creator(s)
export const { addQuiz } = quizzesSlice.actions;
// Export of reducer that our slice generates
export const quizzesReducer = quizzesSlice.reducer;

