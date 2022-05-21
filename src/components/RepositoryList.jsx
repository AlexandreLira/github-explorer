import { useEffect, useState } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

export function RepositoryList(){
    const [ repositories, setRepositories ] = useState([])
    useEffect(() => {
        async function loadRepositories() {
            const URL = 'https://api.github.com/orgs/rocketseat/repos'
            const response = await fetch(URL)
            const data = await  response.json()
            setRepositories(data.map(item => ({
                name: item.name,
                description: item.description,
                link: item.url,
            })))
        }
        loadRepositories()
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map((repository, index) => (
                        <RepositoryItem repository={repository} key={index}/>
                ))}
            </ul>
        </section>
    )
}

