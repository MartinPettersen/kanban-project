'use client'
import React from 'react'

type Props = {
    color: string,
    colorName: string,
}

const ColorIndicator = ({color, colorName}: Props) => {
  return (
    <div className={`bg-${color}`}>ColorIndicator {colorName}</div>
  )
}

export default ColorIndicator