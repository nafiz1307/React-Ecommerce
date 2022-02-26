export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //   return {
      //     ...state,
      //     basket: state.basket.filter((item) => item.id !== action.id),
      //   };
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket=[...state.basket];
      if(index>=0){
          newBasket.splice(index,1);
      }else{
          console.warn(`Cant Remove Product(id: ${action.id} as it's not in the cart!)`)
      }
      return{
          ...state,
          basket:newBasket
      }

      case "SET_USER":
        return{
          ...state,
          user:action.user
        }

    default:
      return state;
  }
};

export default reducer;
