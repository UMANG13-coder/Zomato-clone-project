import { GET_REVIEW, POST_REVIEW } from "./review.type";

const initialState = {
  reviews: {
    reviews: [],
  },
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW:
      return {
        ...state,
        reviews: action.payload,
      };
    case POST_REVIEW:
      return {
        ...state,
        reviews: {
          reviews: [...state.reviews.reviews, action.payload],
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default reviewReducer;