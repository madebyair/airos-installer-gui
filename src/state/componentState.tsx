import { atom } from '@zedux/react'
import Welcome from '../Welcome'
import React from 'react'

export const componentState = atom('component', <Welcome />)