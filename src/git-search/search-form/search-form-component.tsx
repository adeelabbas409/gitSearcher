import React from 'react';
import GitLogo from '../../assests/media/gitLogo.png';
import { searchFormProps } from './interfaces';
import './search-form.scss';
const SearchForm: React.FC<searchFormProps> = ({onChangeSearch, onChangeType, searchValue, typeValue}): JSX.Element => {
    return <div className="formSec">
        <div className="Search-Header">
            <img src={GitLogo} alt="Git logo"/>
            <div>
                <h4>GitHub Searcher</h4>
                <p>Search users and repositories below</p>
            </div>
        </div>
        <div className="Search-Form">
            <input name="searchField" onChange={(e) => onChangeSearch(e)} 
            placeholder={searchValue ? `Search results for ${searchValue}` : "Please enter keyword"}/>
            <select onChange={(e) => onChangeType(e)} value={typeValue}>
                <option value="users">Users</option>
                <option value="repositories">Repositories</option>
            </select>
        </div>
    </div>
}

export default SearchForm;