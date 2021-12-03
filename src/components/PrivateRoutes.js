
function PrivateRoutes({ isSignedIn, userShouldSignIn, children }) {
    if (isSignedIn === userShouldSignIn) {
        return children
    } else {
        return null
    }
}

export default PrivateRoutes;