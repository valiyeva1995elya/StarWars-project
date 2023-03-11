import { createBrowserRouter } from "react-router-dom"
import { Main, ErrorPage, PeoplePage,  PlanetsPage, StarshipsPage, SinglePeoplePage, SinglePlanetPage, SingleStarshipPage } from "./routes";
// import {SinglePeoplePage} from "./components"



const router = createBrowserRouter([
    {
        path: "/",
        element: < Main /> ,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/people",
                element: < PeoplePage /> ,
            },
            {
                path: "/people/:id",
                element: <SinglePeoplePage /> ,
            },
            {
                path: "/planets",
                element: <PlanetsPage /> ,
                
            },
            {
                path: "/starships",
                element: <StarshipsPage /> ,
                
            },
            {
                path: "/planets/:id",
                element: <SinglePlanetPage /> ,
                
            },
            {
                path: "/starships/:id",
                element: <SingleStarshipPage /> ,
                
            },
        ]
    }
])
export default router;