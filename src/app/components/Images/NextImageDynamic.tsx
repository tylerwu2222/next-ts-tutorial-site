import React from 'react'
import Image from 'next/image'

interface NextImageDynamicProps {
    filename: string,
    width: number,
    height: number,
}

export default function NextImageDynamic({
    filename = 'pikachu_wizard.png',
    width=500,
    height=500
}: Partial<NextImageDynamicProps>) {
    return (
        <Image
            src={`/images/${filename}`}
            alt={filename}
            width={width}
            height={height}
        >
        </Image>
    )
}
