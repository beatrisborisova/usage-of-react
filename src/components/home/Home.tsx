import { useLocation } from "react-router-dom";
import { Search } from "../search/Search";

export function Home() {

    const location = useLocation();

    return (
        <>
            <h1>Home page</h1>
            {location.state && <p>User is logged in</p>}
            {!location.state && <p>User is not logged in</p>}
            <Search />
        </>
    )
}