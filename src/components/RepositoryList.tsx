import { useEffect, useState } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    url: string
}

export function RepositoryList(){
    const [ repositories, setRepositories ] = useState<Repository[]>([])
    useEffect(() => {
        async function loadRepositories() {
            const URL = 'https://api.github.com/orgs/rocketseat/repos'
            const response = await fetch(URL)
            const data = await  response.json()
            setRepositories(data)
        }
        loadRepositories()
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => (
                        <RepositoryItem key={repository.name} repository={repository}/>
                ))}
            </ul>
        </section>
    )
}

