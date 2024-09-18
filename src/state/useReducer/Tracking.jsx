import { useReducer } from 'react';

const initialState = {
  amount: 1000,
};

// const reducer = (state, action) => {
//   if (action.type === 'buy_ingredients') return { amount: state.amount - 100 };
//   if (action.type === 'sell_meal') return { amount: state.amount + 10 };
//   if (action.type === 'celebrate_income')
//     return { amount: state.amount + 1000 };
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_INGREDIENTS':
      return {
        ...state,
        amount: state.amount - 100,
      };
    case 'SELL_MEAL':
      return {
        ...state,
        amount: state.amount + 100,
      };
    case 'CELEBRATE_INCOME':
      return {
        ...state,
        amount: state.amount + 1000,
      };
  }
  return state;
};

export function Tracking() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.amount}</h1>
      <button onClick={() => dispatch({ type: 'BUY_INGREDIENTS' })}>
        Buy Ingredient
      </button>
      <button onClick={() => dispatch({ type: 'SELL_MEAL' })}>SELL MEAL</button>
      <button onClick={() => dispatch({ type: 'CELEBRATE_INCOME' })}>
        Celebrate Income
      </button>
    </div>
  );
}

export default Tracking;
