import { atom } from '@zedux/react'
import Welcome from '../welcome/Welcome.tsx'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react'

export const componentState = atom('component', <Welcome />)