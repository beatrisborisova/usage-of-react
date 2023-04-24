export function Profile() {
    return(
        <>
            <h1>Profile page</h1>
            <p>Username: {sessionStorage.getItem('username')}</p>
            <p>Access token: {localStorage.getItem('accessToken')}</p>
        </>
    )
}