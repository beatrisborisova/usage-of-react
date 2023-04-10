import { Navigation } from "./navigation/Navigation";
import { Outlet } from 'react-router-dom';

export function Root() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}