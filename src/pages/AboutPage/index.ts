import { lazy } from 'react'

export const AboutPage = lazy(async () => await import(/* webpackChunkName: "AboutPage" */ './ui/AboutPage'))
