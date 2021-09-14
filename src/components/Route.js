import  { useEffect, useState } from 'react';

// a route handler must be set up to handle our dispatch we need ot define a useState hook
// usually we only want to run an eventHandler one time


const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)

        }
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }

    }, []);
    return currentPath === path
        ? children
        : null;

};

export default Route;