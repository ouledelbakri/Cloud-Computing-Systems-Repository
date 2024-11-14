import { ACCOUNT_LIST } from './database.mjs';
import { accountSummaryList } from './queryDatabase.mjs';

export const accountQueryDAO = {
  retrieveAccountList() {
    return accountSummaryList;
   },

  retrieveAccount(id) {
    const account = accountSummaryList.find(account => account.id === id);
    if (account) {
      return {
        id: account.id,
        name: `${account.firstName} ${account.lastName}`,
      };
    }
    return null;
  },
};