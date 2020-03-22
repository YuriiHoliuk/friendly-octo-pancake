
export const ACTION_TYPES = {
  START_LOADING: 'START_LOADING',
  RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
  FINISH_LOADING: 'FINISH_LOADING',
};

const {
  START_LOADING,
  RECEIVE_CATEGORIES,
  FINISH_LOADING,
} = ACTION_TYPES;

export const startLoading = () => ({ type: START_LOADING });
export const recievCategories = (data) => ({ type: RECEIVE_CATEGORIES, data });
export const finishLoading = () => ({ type: FINISH_LOADING });
