import alf from '../../public/images/image.png'
import  { StaticImageData } from 'next/image'

type CardProps = {
    title: string,
    description: string,
    image: StaticImageData,
    link: string,
}

const cards: CardProps[] = [
    {
        title: '1',
        description: '1',
        link: '/public/images/image.png',
        image: alf,
    },
    {
        title: '2',
        description: '2',
        link: '/public/images/image.png',
        image: alf,
    },
    {
        title: '3',
        description: '3',
        link: '/public/images/image.png',
        image: alf,
    },
]

export default cards