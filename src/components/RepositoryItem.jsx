export function RepositoryItem(props) {
  const { repository } = props;
  return (
    <li>
      <strong>{repository?.name ?? 'Não encontrado'}</strong>
      <p>{repository?.description ?? 'Default'}</p>
      <a href={repository?.link} target="_blank">Acessa repositório</a>
    </li>
  );
}
