import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"
import { moviesData } from "../../data/moviesData"
import { Movie as MovieInterface } from "../../interfaces/movie"
import { Movie as MovieItem } from "../movie/Movie"

export function Movies() {

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const { hasUser } = useContext(AuthContext);

    setTimeout(() => {
        setData(moviesData)
        setIsLoading(false)
    }, 2000)

    return (
        <div>
            {hasUser &&
                <>
                    <div>Movies Component / Parent Element /</div>
                    {isLoading && <p>Loading...</p>}
                    {!isLoading && data.map(el => <MovieItem movie={el} key={el.id} />)}
                </>
            }
            {!hasUser &&
                <>
                    <p>You cannot access this page unless you're logged in</p>
                    <Link to='/login'>Go to LOGIN</Link>
                </>
            }
        </div>
    )
}