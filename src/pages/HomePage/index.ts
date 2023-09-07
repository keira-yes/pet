import { lazy } from 'react'

export const HomePage = lazy(() => import(/* webpackChunkName: "HomePage" */ './ui/HomePage'))
