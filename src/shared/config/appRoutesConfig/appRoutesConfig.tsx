import { type RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'
import { NotFound } from 'pages/NotFound'

export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const appRoutesPaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*'
}

export const appRoutesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: appRoutesPaths.home,
        element: <HomePage />
    },
    [AppRoutes.ABOUT]: {
        path: appRoutesPaths.about,
        element: <AboutPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: appRoutesPaths.not_found,
        element: <NotFound />
    }
}
