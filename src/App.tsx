import React, { useState, useEffect } from "react";
import "./App.scss";
import "./assests/sass/common.scss";
import SearchForm from "./git-search/search-form/search-form-component";
import SearchList from "./git-search/search-form/search-list/search-list-component";
import {
  setSearchResults,
  setSearchType,
  setSearchText,
  setSearchPageNumber,
  setSearchTotalCount,
} from "./redux/search/search.action";
import { getSearchResults } from "./services/searchService";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { searchCardProps } from "./git-search/search-form/interfaces";

function App() {
  const [type, setType] = useState("users");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [filterResults, setFilterResults] = useState<searchCardProps[] | []>(
    []
  );
  const dispatch = useDispatch();
  const searchRed = useSelector((state) => state.searchReducer);
  const [debouncedCallApi] = useState(() =>
    _.debounce((value) => {
      setSearch(value);
    }, 1000)
  );

  useEffect(() => {
    if (type && search?.length > 3) {
      getData(searchRed.pageNumber);
    }
  }, [type, search]);

  useEffect(() => {
    // let filterResultsArr: searchCardProps[] = [];
    // if (searchRed.searchType === "users") {
    //   filterResultsArr = searchRed.searchResults.filter(
    //     (x) =>
    //       x.type === "user" &&
    //       x.login.toLowerCase().startsWith(searchRed.searchText.toLowerCase())
    //   );
    // } else {
    //   filterResultsArr = searchRed.searchResults.filter(
    //     (x) =>
    //       x.type === "repo" &&
    //       x.name.toLowerCase().startsWith(searchRed.searchText.toLowerCase())
    //   );
    // }
    setSearch(searchRed.searchText)
    setType(searchRed.searchType)
    // setFilterResults(filterResultsArr);
  }, []);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (value.length > 3) {
      debouncedCallApi(value);
    }else{
      setSearch(value);
      setFilterResults([]);
    }
  };

  const onChangeType = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setType(value);
    dispatch(setSearchType(value));
  };

  const getData = async (pageNumber, getMore = false) => {
    try {
      setLoading(true);
      let filterResultsArr: searchCardProps[] = [];
      if (searchRed.searchType === "users")
        filterResultsArr = searchRed.searchResults.filter(
          (x) =>
            x.type === "user" &&
            x.login.toLowerCase().startsWith(search.toLowerCase())
        );
      else
        filterResultsArr = searchRed.searchResults.filter(
          (x) =>
            x.type === "repo" &&
            x.name.toLowerCase().startsWith(search.toLowerCase())
        );

      if (filterResultsArr.length > 0 && !getMore) {
        setFilterResults(filterResultsArr);
        // dispatch(setSearchTotalCount(filterResultsArr.length));
        dispatch(setSearchText(search));
        dispatch(setSearchPageNumber(filterResultsArr.length));
        setLoading(false);
      } else {
        const results = await getSearchResults(
          search,
          type === "repositories",
          pageNumber
        );

        const tempArr = [...searchRed.searchResults, ...results.data?.items];
        let filterArr: searchCardProps[] = [];
        if (searchRed.searchType === "users")
          filterArr = tempArr.filter(
            (x) =>
              x.login && x.login.toLowerCase().startsWith(search.toLowerCase())
          );
        else
          filterArr = tempArr.filter(
            (x) =>
              x.name && x.name.toLowerCase().startsWith(search.toLowerCase())
          );
        setFilterResults(filterArr);
        dispatch(setSearchResults(results.data?.items, pageNumber));
        dispatch(setSearchText(search));
        dispatch(setSearchTotalCount(results.data?.total_count));
        setLoading(false);
        console.log(results);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="App">
      <div className={`App-Content ${filterResults.length > 0 ? 'toTop' : 'topMiddle'}`}>
        <SearchForm
          onChangeSearch={onChangeSearch}
          onChangeType={onChangeType}
          searchValue={search}
          typeValue={type}
        />
        {search.length > 3 && (
          <SearchList loadMore={getData} filterResultsArr={filterResults} loading={loading}/>
        )}
        {loading && <div className="loading"></div>}
      </div>
    </div>
  );
}

export default App;
