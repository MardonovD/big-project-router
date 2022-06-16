export const initialState = [];

export const shopReducers = (state, action) => {
  if (action.type === "ALL_PRODUCTS") {
    return [...state, action.payload];
  }
  return state;
};
