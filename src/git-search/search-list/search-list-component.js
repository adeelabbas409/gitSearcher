import { useSelector } from "react-redux";
import SearchRepoCard from "../search-card/search-repo-card-component";
import SearchUserCard from "../search-card/search-user-card-component";
import "./search-list.scss";
import InfiniteScroll from "react-infinite-scroll-component";
const SearchList = ({ loadMore, filterResultsArr, loading = false }) => {
  const search = useSelector((state) => state.searchReducer);

  return filterResultsArr?.length > 0 ? (
    <>
      <InfiniteScroll
        dataLength={filterResultsArr.length}
        next={() => loadMore(search.pageNumber + 1, true)}
        hasMore={filterResultsArr.length < search.totalCount}
        loader={filterResultsArr.length > 6 && <h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>This is all we have</b>
          </p>
        }
      >
        <div className="list">
          {filterResultsArr?.map((item, index) =>
            search.searchType === "users" ? (
              <SearchUserCard {...item} key={index} />
            ) : (
              <SearchRepoCard {...item} key={index} />
            )
          )}
        </div>
      </InfiniteScroll>
    </>
  ) : !loading ? (
    <h2>No Results</h2>
  ) : null;
};

export default SearchList;
