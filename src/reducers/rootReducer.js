const initialState = {
  backpackGear: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
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
