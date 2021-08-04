import { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import ReactGa from 'react-ga'




/**
 * scroll to top element is scrolling the window to top when the roure changes
 * 
 * @return {Element} : scrool to top element
 */
export default function GoogleAnalytics() {

    // getting the current route url
    const { pathname } = useLocation();

    // initializing google analytics
    ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)

    // reporting page view
    useEffect(() => {
        // reporting page view
        ReactGa.pageview(window.location.pathname + window.location.search)
    }, [pathname])


    return null;
}
