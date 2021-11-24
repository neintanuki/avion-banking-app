import { useEffect, useState } from 'react';

export default function Route({ path, children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    function onLocationChange() {
        setCurrentPath(window.location.pathname);
    }

    // useEffect fired once and adds a custom event listener to the window object
    // it also returns a function that removes the custom event listener after the component
    // is unmounted from the DOM

    useEffect(() => {
        window.addEventListener("navigate", onLocationChange);

        return () => {
            window.removeEventListener("navigate");
        }
    }, [])

    return currentPath === path ? children() : null;
}