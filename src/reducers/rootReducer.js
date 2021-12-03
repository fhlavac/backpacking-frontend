const initialState = {
  backpackGear: [],
  categories: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CATEGORIES': {
      return {
        ...state,
        categories: action.payload || [],
      };
    }
    case 'ADD_TO_BACKPACK': {
      return {
        ...state,
        backpackGear: [
          ...state.backpackGear,
          action.payload,
        ],
      };
    }
    case 'REMOVE_FROM_BACKPACK': {
      return {
        ...state,
        backpackGear: [
          ...state.backpackGear.filter((gear) => gear.id !== action.payload),
        ],
      };
    }
    default:
      return state;
  }
}
