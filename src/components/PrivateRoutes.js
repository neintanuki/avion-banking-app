import { useEffect, useState } from "react";

function PrivateRoutes({ isSignedIn, userShouldSignIn, isAdmin, accountSignedIn, users, children }) {
    const [isAccepted, setIsAccepted] = useState(false);

    useEffect(() => {
        if (users) {
            users.forEach(user => {
                if (user.accountNumber === accountSignedIn && user.isAdmin === isAdmin) {
                    setIsAccepted(true);
                }
            })
        }
    }, [users])

    if (isSignedIn === userShouldSignIn && isAccepted) {
        return children
    } else {
        return null
    }
}

export default PrivateRoutes;