import { type RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'

export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about'
}

export const appRoutesPaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const appRoutesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: appRoutesPaths.home,
        element: <HomePage />
    },
    [AppRoutes.ABOUT]: {
        path: appRoutesPaths.about,
        element: <AboutPage />
    }
}
