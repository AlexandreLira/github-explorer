interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  const { repository } = props;
  return (
    <li>
      <strong>{repository.name ?? 'Não encontrado'}</strong>
      <p>{repository.description ?? 'Default'}</p>
      <a href={repository.url} target="_blank">Acessa repositório</a>
    </li>
  );
}
