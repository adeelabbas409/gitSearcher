const { default: ActionTypes } = require("../ActionTypes");

const { SEARCH_ACTIONS } = ActionTypes;

const INITIAL_STATE = {
  searchResults: [],
  searchType: "users",
  searchText: "",
  pageNumber: 1,
  totalCount:0
};

const SearchReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ACTIONS.SET_SEARCH_RESULT:
      const objTempArr = [];
        payload.results.map(item => {
          if(state.searchType === "users"){
            objTempArr.push({
              type:"user",
              login: item.login,
              id:item.id,
              avatar_url:item.avatar_url,
              score:item.score
            })
          }else{
            objTempArr.push({
              type:"repo",
              name: item.name,
              description: item.description,
              owner: {
                  login: item.owner.login,
                  avatar_url:item.owner.avatar_url,
              },
              watchers: item.watchers,
              open_issues: item.open_issues,
              forks: item.forks,
            })
          }
         
        })
      
      return {
        ...state,
        searchResults: [...state.searchResults, ...objTempArr],
        pageNumber: payload.pageNumber,
      };
    case SEARCH_ACTIONS.SET_SEARCH_TYPE:
      return {
        ...state,
        searchType: payload,
        pageNumber: 1,
      };
    case SEARCH_ACTIONS.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: payload,
      };
    case SEARCH_ACTIONS.SET_SEARCH_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: Math.ceil(payload/20),
      };
      case SEARCH_ACTIONS.SET_SEARCH_TOTAL_COUNT:
        return {
          ...state,
          totalCount: payload,
        };
    default:
      return state;
  }
};

export default SearchReducer;
