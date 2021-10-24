const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        items: action.payload,
      };
    case "ADD_ITEM":
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    default:
      return state;
  }
}
