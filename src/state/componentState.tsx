import { atom } from '@zedux/react'
import Welcome from '../Welcome'

export const componentState = atom('component', <Welcome />)