import {
  POPULATE_USER,
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  EDIT_ACCOUNT,
  LOAD_ACCOUNT_STATS,
  // ADD_TRADE,
} from '../constants';

const initialState = { accounts: [], accountStats: [], isLoaded: { accounts: false, accountStats: false}};

export const account = (state = initialState, action = {}) => {
  switch (action.type) {
    case POPULATE_USER:
      return { ...state, accounts: action.payload.accounts, isLoaded: {...state.isLoaded, accounts: true} };
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
      return { ...state, accountStats: action.payload.accountStats, isLoaded: {...state.isLoaded, accountStats: true} };
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

export const selectAccountStats = (state, accountId) => {
  return state.account.accountStats.find(
    account => account.account_id === accountId,
  );
}

export const selectAccountCurrency = ( state, accountId ) => {
  return (state.account.accounts.find(
    account => account.account_id === accountId,
  )).currency;
}

export const selectHasAccounts = (state, account) => {
  return state.account.accounts.length !== 0
}