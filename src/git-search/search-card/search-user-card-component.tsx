import "./search-card.scss";
import { searchCardProps } from "../interfaces";
const SearchUserCard: React.FC<searchCardProps> = ({login, avatar_url, score, id}) : JSX.Element => {
  return (
    <div className="Card">
      <div className="imgDiv">
        <img src={avatar_url} alt="Avatar" />
      </div>

      <div className="Info-Box">
        <div className="highLights">
          <p>{login}</p>
          <p className="subline">ID: {id}</p>
        </div>
        <ul>
          <li>
            <span>Score</span>
            <span className="value">{score}</span>
          </li>
          <li>
            <span>Followers</span>
            <span className="value">13</span>
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

export default SearchUserCard;
