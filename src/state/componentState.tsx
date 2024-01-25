import { atom } from '@zedux/react'
import Welcome from '../welcome/Welcome.tsx'
import React from 'react'

export const componentState = atom('component', <Welcome />)