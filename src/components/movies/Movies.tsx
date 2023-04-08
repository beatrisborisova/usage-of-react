import { moviesData } from "../../data/moviesData"
import { Movie } from "../movie/Movie"

export function Movies() {
    return (
        <div>
            <div>Movies Component / Parent Element /</div>
            {moviesData.map(el => <Movie movie={el} key={el.id} />)}
        </div>
    )
}