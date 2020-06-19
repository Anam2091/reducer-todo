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
      case "TO_TOGGLE":
      return {
        items: state.items.map(item => {
            if (action.payload === item.id) {
              return {
                ...item,
                completed: !item.completed
              };
            }
            return item;
          })
      };
      case "CLEAR_TODO":
        return {

            items: state.items.filter(item => !item.completed)
         
        };


    default:
      return state;
  }
};
