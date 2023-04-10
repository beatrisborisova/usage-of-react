import { useState } from "react"
import { moviesData } from "../../data/moviesData"
import { Movie as MovieInterface } from "../../interfaces/movie"
import { Movie as MovieItem } from "../movie/Movie"

export function Movies() {

    const [data, setData] = useState(Array<MovieInterface>)
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setData(moviesData)
        setIsLoading(false)
    }, 2000)

    return (
        <div>
            <div>Movies Component / Parent Element /</div>
            {isLoading && <p>Loading...</p>}
            {!isLoading && data.map(el => <MovieItem movie={el} key={el.id} />)}
        </div>
    )
}