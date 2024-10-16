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
            <p className="text-left">
                <strong className="text-4xl text-black">{props.title}</strong>
            </p>
            <div className="flex border-b-2 border-leaf-green pb-2 "/>
            <p className="text-left mt-1">
                <strong className="text-lg text-leaf-green">{props.subTitle}</strong><br />
                {/* <span className="text-base text-leaf-green leading-none">{props.description}</span> */}
            </p>
            <div className="flex justify-end items-center mt-6"/>
            <div className="flex justify-end items-center mt-20">
                <div className="flex rounded-full items-center justify-center bg-apple-green border border-apple-green shadow-lg h-8 w-32">
                    <Button style={{fontSize: 15, color: "white", textTransform: "capitalize", fontWeight: "bold"}} onClick={() => {}}>{props.buttonText}</Button>
                </div>
            </div>
        </div>
    );
}

export default AppCard;