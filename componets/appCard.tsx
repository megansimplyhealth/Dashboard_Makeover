import 'tailwindcss/tailwind.css'
import { Button, IconButton } from "@material-ui/core";
import { ArrowBackOutlined, ArrowForwardOutlined } from '@material-ui/icons';
import Image from 'next/image';
import TextButton from './textButton';

interface CardProps {
    title: string,
    subTitle: string,
    description: string,   
    buttonText: string,
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AppCard = (props: CardProps) => {

    return (
        <div className="relative bg-transparent">
            <p className="text-left pb-2">
                <strong className="text-4xl text-black">{props.title}</strong>
            </p>
            <div className="flex border border-b-2 border-leaf-green"/>
            <p className="text-left mt-">
                <strong className="text-lg text-leaf-green">{props.subTitle}</strong><br />
                {/* <span className="text-base text-leaf-green leading-none">{props.description}</span> */}
            </p>
            <div className="flex bg-transparent justify-end items-end mt-12"/>
            <div className="flex bg-transparent justify-end items-end mt-12">
                <button className="bg-apple-green rounded-full shadow-lg text-white text-lg py-2 px-4 font-bold" onClick={() => {}}>
                    {props.buttonText}
                </button>
            </div>
        </div>
    );
}

export default AppCard;