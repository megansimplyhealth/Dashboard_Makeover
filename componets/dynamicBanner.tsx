import 'tailwindcss/tailwind.css'
import { IconButton } from "@material-ui/core";
import { ArrowBackOutlined, ArrowForwardOutlined } from '@material-ui/icons';
import Image from 'next/image';

type ImagePropsType = {
    src: string;
    link: string | null;
  };

interface BannerProps {
    image: ImagePropsType[];
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const DynamicBanner = (props: BannerProps) => {

  return (
    <div className="absolute w-full h-full flex items-center justify-center">
      <div className="flex items-center justify-between w-full px-10 py-4 ml-5">
        
        <div className="flex items-center"> 
          <div className="h-28">
            <p className="text-left leading-none">
              <strong className="text-3xl text-black">Practice news</strong><br />
              <span className="text-xs text-grey-4 leading-none">Stay on top of all upcoming events, <br /> practice statistics and marketing tips.</span>
            </p>
  
            <div className="flex space-x-2 mt-2">
              <IconButton type="button" className="rounded-full border border-grey-2 shadow-lg w-8 h-8 flex items-center justify-center" onClick={() => {}}>
                <ArrowBackOutlined />
              </IconButton>
              <IconButton type="button" className="rounded-full border border-grey-2 shadow-lg w-8 h-8 flex items-center justify-center" onClick={() => {}}>
                <ArrowForwardOutlined />
              </IconButton>
            </div>
          </div>

          <div className="flex items-center justify-center ml-4">
            <a className="flex items-center justify-center" href={props.image[0].link}>
            <Image
                src={props.image[0].src}
                alt="Denplan Summit 2025 Event Banner"
                width={650}
                height={50}
                className="rounded-xl ml-5 mr-5 border border-grey shadow-lg"
            />
            </a>

            <a className="flex items-center justify-center" href={props.image[1].link}>
            <Image
              src={props.image[1].src}
              alt="Denplan Summit 2025 Event Banner"
              width={650}
              height={50}
              className="rounded-xl border border-grey shadow-lg"
            />
            </a>

          </div>
  
        </div>
        
      </div>
    </div>
  );
  
}

export default DynamicBanner;