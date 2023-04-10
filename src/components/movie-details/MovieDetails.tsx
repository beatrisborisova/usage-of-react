import { useParams } from 'react-router-dom';

export function MovieDetails() {

    const params = useParams()
    return (
        <>
            <h1>Movie details here</h1>
            <p>Current movie's ID is {params.id}</p>
        </>
    )
}