import * as actionType from "./actions";

const INGREDIENT_PRICE = {
  salad: 0.3,
  cheese: 0.6,
  bacon: 0.8,
  meat: 1.5,
};

const initialState = {
  ingredients: {
    bacon: 0,
    cheese: 0,
    meat: 0,
    salad: 0,
  },
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  //   switch (action.type) {
  // case actionType.ADD_INGREDIENT:
  //   const oldValue = state.ingredients[action.ingType];
  //   let updatedValue = oldValue + 1;
  //   const oldPrice = state.totalPrice;
  //   const updatedPrice = oldPrice + INGREDIENT_PRICE[action.ingType];

  //   const oldState = { ...state };
  //   oldState.ingredients[action.ingType] = updatedValue;
  //   oldState.totalPrice = updatedPrice;
  //   return oldState;
  //   break;
  // this.updatePurchasableState(oldState.ingredients);

  // case actionType.REMOVE_INGREDIENT:
  //   const type = action.ingType;
  //   const oldVValue = state.ingredients[type];
  //   if (oldVValue <= 0) {
  //     return;
  //   }
  //   const updatedVValue = oldVValue - 1;
  //   const oldPPrice = state.totalPrice;
  //   const updatedPPrice = oldPPrice - INGREDIENT_PRICE[type];

  //   const oldSState = { ...state };
  //   oldSState.ingredients[type] = updatedVValue;
  //   oldSState.totalPrice = updatedPPrice;
  //   return oldSState;
  //   break;
  // // this.updatePurchasableState(oldState.ingredients);
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingType]: state.ingredients[action.type] + 1,
        },
      };

    case actionType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingType]: state.ingredients[action.type] - 1,
        },
      };
  }
  return state;
};

export default reducer;
