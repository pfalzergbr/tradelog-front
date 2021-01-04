import {
  POPULATE_USER,
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  EDIT_ACCOUNT,
  LOAD_ACCOUNT_STATS,
  ADD_TRADE,
} from '../constants';

const initialState = { accounts: [], accountStats: [] };

export const account = (state = initialState, action = {}) => {
  switch (action.type) {
    case POPULATE_USER:
      return { ...state, accounts: action.payload.accounts };
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.payload.newAccount],
      };
    case EDIT_ACCOUNT:
      const updatedAccount = action.payload.updatedAccount;
      const updatedAccounts = state.accounts.map(account =>
        account.account_id === updatedAccount.account_id
          ? updatedAccount
          : account,
      );
      return {
        ...state,
        accounts: updatedAccounts,
      };
    case DELETE_ACCOUNT:
      const filteredAccounts = state.accounts.filter(
        account => account.account_id !== action.payload.account_id,
      );
      return { ...state, accounts: filteredAccounts };
    case LOAD_ACCOUNT_STATS:
      return { ...state, accountStats: action.payload.accountStats };
    // case ADD_TRADE:

    //     const updatedStats = state.accountStats.map(stat =>
    //       stat.account_id === action.payload.accountUpdate.account_id
    //         ? { ...stat, balance: action.payload.accountUpdate.balance }
    //         : stat,
    //     );
    //     return {
    //       ...state,
    //       accountStats: updatedStats,
    //     };
    default:
      return state;
  }
};

export const selectAccount = (state, accountId) => {
  return state.account.accounts.find(
    account => account.account_id === accountId,
  );
};
