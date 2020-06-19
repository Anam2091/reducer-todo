export const initialState = {
  items: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        items: [
          ...state.items,
          {
            ...action.payload,
            id: new Date().valueOf(),
            completed: false,
          },
        ],
      };
    default:
      return state;
  }
};
