'use client'

import React, { useEffect, useState } from "react"

type CoordsProp = {
    x: number,
    y: number,
    z: number,
}

const useHover3d = (ref: React.RefObject<HTMLDivElement>, { x = 0, y = 0, z = 0, }: CoordsProp) => {
    const [coords, setCoords] = useState({ x, y, z })
    const [isHovering, setIsHovering] = useState(false)

    const mouseMoveHandler = (e: MouseEvent | undefined): void => {
        if (e && ref.current) {
            const { clientX, clientY } = e
            const { offsetWidth: width, offsetHeight: height } = ref.current

            const x = (clientX - width / 2) / width
            const y = (clientY - height / 2) / height

            setCoords({ x, y, z })
        }
    }

    const mouseLeaveHandler = () => {
        setIsHovering(false)
    }

    const mouseEnterHandler = () => {
        setIsHovering(true)
    }

    useEffect(() => {
        const { current } = ref

        if (current) {
            current.addEventListener('mousemove', mouseMoveHandler)
            current.addEventListener('mouseenter', mouseEnterHandler)
            current.addEventListener('mouseleave', mouseLeaveHandler)
        }

        return () => {
            if (current) {
                current.removeEventListener('mousemove', mouseMoveHandler)
                current.removeEventListener('mouseenter', mouseEnterHandler)
                current.removeEventListener('mouseleave', mouseLeaveHandler)
            }
        }

    }, [ref])

    const { x: xCoord, y: yCoord } = coords
    const xTransform = isHovering ? xCoord * x : 0
    const yTransform = isHovering ? yCoord * x : 0
    const zTransform = isHovering ? z : 0

    const transform = `perspective(1000px) rotateX(${xTransform}deg) rotateY(${yTransform}deg) translateZ(${zTransform}px)`
    const transition = isHovering ? `all 0.1s easy-in-out` : ``

    return { transform, transition }
}

export default useHover3d