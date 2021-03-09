import "./search-card.scss";
import { searchCardProps } from "../interfaces";
const SearchRepoCard: React.FC<searchCardProps> = ({name, description, owner, watchers,forks}) : JSX.Element => {
  return (
   
    <div className="Card">
      <div className="imgDiv">
        <img src={owner?.avatar_url} alt="Avatar" />
      </div>

      <div className="Info-Box">
        <div className="highLights">
          <p>{name}</p>
          <p className="subline">{description}</p>
        </div>
        <ul>
          <li>
            <span>Watchers</span>
            <span className="value">{watchers}</span>
          </li>
          <li>
            <span>Forks</span>
            <span className="value">{forks}</span>
          </li>
          <li>
            <span>Public Repo</span>
            <span className="value">103</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchRepoCard;
