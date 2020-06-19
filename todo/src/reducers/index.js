export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589  
  }
];
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [ ...state, 
            {
            ...action.payload,
            id: new Date().valueOf(),
            completed: false,
            }
    ];
      default:
        return state;
    }
  };