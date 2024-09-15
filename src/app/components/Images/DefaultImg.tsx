interface DefaultImageProps {
    filename: string
}

export default function DefaultImg({
    filename = 'pikachu_wizard.png'
}: Partial<DefaultImageProps>) {
    return (
        <img
            src={`/images/${filename}`}
            alt={filename}
            width={200}
            loading='lazy'
        >
        </img>
    )
}
