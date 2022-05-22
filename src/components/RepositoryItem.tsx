import { doTruncarStr } from "../utils/general";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    license: {
        name: string;
    };
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    topics: string[]
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  const { repository } = props;

  return (
    <li>
      <div className="left-container">
        <img src={repository.owner.avatar_url}/> 
      </div>

      <div className="right-container">
        <div className="profile-header">
          <strong>{repository.name ?? 'Não encontrado'}</strong>
          <span>@{repository.owner.login}</span>
        </div>
        <p>{repository.description ?? 'Default'}</p>
        
        <ul className="topic-list">
          {repository.topics.map((item, index) => {
            if(index < 3){
              
              return (
                <li key={item}>{doTruncarStr(item, 10)}</li>
              )
            }
          })}
          {repository.topics.length > 3 && <li>+ {repository.topics.length - 3}</li>}

        </ul>

        <a href={repository.html_url} target="_blank">Acessa repositório</a>
      </div>
    </li>
  );
}
