import 'tailwindcss/tailwind.css'
import { IconButton } from "@material-ui/core";
import { ArrowBackOutlined, ArrowForwardOutlined } from '@material-ui/icons';
import Image from 'next/image';
import TextButton from './textButton';

interface CardProps {
    title: string,
    image: string,
    subTitle: string,
    description: string,   
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AppCard = (props: CardProps) => {

    return (
        <div>
            <p className="text-left">
                <strong className="text-4xl text-black">{props.title}</strong>
            </p>
            <div className="flex border-b-2 border-leaf-green-40 pb-2"/>
            <p className="text-left mt-2 leading-none">
                <strong className="text-lg text-black">{props.subTitle}</strong><br />
                <span className="text-base text-grey-4 leading-none">{props.description}</span>
            </p>
            <div className="flex items-end justify-end mt-10">
                <TextButton  onClick={() => {}} text="View Quality manuals" />
            </div>
        </div>
    );
}

export default AppCard;