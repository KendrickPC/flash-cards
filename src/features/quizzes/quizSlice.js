import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/topicSlice";

export const quizSlice = createSlice({
  name: 'quizzes',
  initialState: {
    // This inner quizzes object will eventually hold all quizzes keyed by id.
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
      // Remember, we want the quizzes object to be keyed by quiz id, so insert your newly created quiz object as the value associated with the id you receive in the action’s payload.
      state.quizzes[action.payload.id] = {
        id: action.payload.id,
        name: action.payload.name,
        topicId: action.payload.topicId,
        cardIds: action.payload.cardIds,
      }
    }
  }
})

export const createNewQuizThunk = (payload) => {
  return (dispatch) => {
    // dispatch multiple actions here
    dispatch(addQuiz(payload));
    dispatch(addQuizIdToTopic( {topicId: payload.topicId, id: payload.id} ));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const quizzesReducer = quizSlice.reducer;
export const { addQuiz } = quizSlice.actions;
