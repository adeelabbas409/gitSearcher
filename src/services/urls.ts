const BASE_URL = "https://api.github.com/"

export const searchAPI = {
    getResults: (query, isRepo, pageNumber) => `${BASE_URL}search/${isRepo ? 'repositories' : 'users'}?q=${query}&page=${pageNumber}&per_page=20`,
  };
