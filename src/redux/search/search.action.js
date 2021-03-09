import ActionTypes from "../ActionTypes";
const { SEARCH_ACTIONS } = ActionTypes;

export const setSearchResults= (results, pageNumber) => ({
    type: SEARCH_ACTIONS.SET_SEARCH_RESULT,
    payload: {results, pageNumber}
});

export const setSearchType= value => ({
    type: SEARCH_ACTIONS.SET_SEARCH_TYPE,
    payload: value
});
export const setSearchText= value => ({
    type: SEARCH_ACTIONS.SET_SEARCH_TEXT,
    payload: value
});
export const setSearchPageNumber= value => ({
    type: SEARCH_ACTIONS.SET_SEARCH_PAGE_NUMBER,
    payload: value
});
export const setSearchTotalCount= value => ({
    type: SEARCH_ACTIONS.SET_SEARCH_TOTAL_COUNT,
    payload: value
});



