import { createSelector } from "reselect";

export const getHistory = state => state.history || [];

export const getHistoryItems = createSelector(
    getHistory,
    (history) => _.orderBy(history, 'eventTime', 'desc')
);

