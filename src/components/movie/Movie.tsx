export function Movie(props: any) {

    const { title, year, genre, plot, poster } = props.movie
    return (
        <div>
            <h2>{title}</h2>
            <p>{year}</p>
            <p>{genre}</p>
            <p>{plot}</p>
            <img src={poster} />
        </div>
    )
}