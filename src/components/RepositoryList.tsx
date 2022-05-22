import { useEffect, useState } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

interface Repository {
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


export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])
    useEffect(() => {
        async function loadRepositories() {
            const URL = 'https://api.github.com/search/repositories?q=app'
            const response = await fetch(URL)
            const data = await response.json()

            setRepositories(data.items)
        }
        loadRepositories()
    }, [])

    return (
        <section className="repository-list">
            <ul>
                {repositories.map((repository, index) => (
                    <RepositoryItem key={index} repository={repository} />
                ))}
            </ul>
        </section>
    )
}

