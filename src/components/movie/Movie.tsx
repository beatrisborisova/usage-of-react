import { Fragment, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Movie as MovieInterface } from "../../interfaces/movie"

export function Movie(props: { movie: MovieInterface }) {

    const { id, title, year, genre, plot, poster } = props.movie

    const [test, setTest] = useState('')
    const [marked, setMarked] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        console.log('Whenever');
    })

    useEffect(() => {
        console.log('Mounting');
    }, [])

    useEffect(() => {
        console.log('Updating');
    }, [marked])

    useEffect(() => {
        return () => {
            console.log('Unmounting');
        }
    }, [isDeleted])

    const markMovie = () => {
        setMarked(marked => !marked)
    }

    const markMovieAsDeleted = () => {
        setIsDeleted(true)
    }

    const goToDetails = () => {
        navigate(`/movies/${id}`)
    }

    return (
        <Fragment>
            {!isDeleted &&
                <div onClick={markMovie} style={marked ? { backgroundColor: 'red' } : { backgroundColor: '' }}>
                    <h2>{title}</h2>
                    <p>{year}</p>
                    <p>{genre}</p>
                    <p>{plot}</p>
                    <img src={poster} />
                    <button onClick={markMovieAsDeleted}>Mark as Deleted</button>
                    <button onClick={goToDetails}>Show details</button>
                </div>
            }
        </Fragment>
    )
}