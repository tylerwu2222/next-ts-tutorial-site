import React from 'react'
import Image from 'next/image'
import pikachu from '../../../../public/images/pikachu_wizard.png';

interface NextImageStaticProps {
    altname: string
}

export default function NextImageStatic({
    altname = 'pikachu_wizard.png'
}: Partial<NextImageStaticProps>) {
    return (
        <Image
            src={pikachu}
            alt={altname}
            width={200}
        >
        </Image>
    )
}
