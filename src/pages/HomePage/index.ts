import { lazy } from 'react'

export const HomePage = lazy(async () => await import(/* webpackChunkName: "HomePage" */ './ui/HomePage'))
