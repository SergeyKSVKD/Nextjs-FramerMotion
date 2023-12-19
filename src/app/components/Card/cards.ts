import alf from '../../public/images/image.png'
import alf1 from '../../public/images/image1.jpg'
import alf2 from '../../public/images/image2.jpg'
import alf3 from '../../public/images/image3.jpg'
import alf4 from '../../public/images/image4.jpg'
import  { StaticImageData } from 'next/image'

type CardProps = {
    title: string,
    description: string,
    image: StaticImageData,
    link: string,
}

const cards: CardProps[] = [
    {
        title: 'card 1',
        description: 'text 1',
        link: '/public/images/image.png',
        image: alf,
    },
    {
        title: 'card 2',
        description: 'text 2',
        link: '/public/images/image1.jpg',
        image: alf1,
    },
    {
        title: 'card 3',
        description: 'text 3',
        link: '/public/images/image2.jpg',
        image: alf2,
    },
    {
        title: 'card 4',
        description: 'text 5',
        link: '/public/images/image3.jpg',
        image: alf3,
    },
    {
        title: 'card 5',
        description: 'text 5',
        link: '/public/images/image4.jpg',
        image: alf4,
    },
]

export default cards