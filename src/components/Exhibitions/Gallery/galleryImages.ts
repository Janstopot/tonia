import { StaticImageData } from "next/image";

import paris1 from "@/assets/images/exhibitions/paris/paris1.png"
import paris2 from "@/assets/images/exhibitions/paris/paris2.png"
import paris3 from "@/assets/images/exhibitions/paris/paris3.png"
import paris4 from "@/assets/images/exhibitions/paris/paris4.png"
import paris5 from "@/assets/images/exhibitions/paris/paris5.png"
import paris6 from "@/assets/images/exhibitions/paris/paris6.png"
import paris7 from "@/assets/images/exhibitions/paris/paris7.png"
import paris8 from "@/assets/images/exhibitions/paris/paris8.png"
import paris9 from "@/assets/images/exhibitions/paris/paris9.png"
import paris10 from "@/assets/images/exhibitions/paris/paris10.png"
import paris11 from "@/assets/images/exhibitions/paris/paris11.png"
import paris12 from "@/assets/images/exhibitions/paris/paris12.png"

export interface Gallery {
    image: StaticImageData;
    name: string;
  }

  const galleryData: Gallery[] = [
    {
      image: paris1,
      name: "paris1"
    },
    {
      image: paris2,
      name: "paris2"
    },
    {
      image: paris3,
      name: "paris3"
    },
    {
      image: paris4,
      name: "paris4"
    },
    {
      image: paris5,
      name: "paris5"
    },
    {
      image: paris6,
      name: "paris6"
    },
    {
      image: paris7,
      name: "paris7"
    },
    {
      image: paris8,
      name: "paris8"
    },
    {
      image: paris9,
      name: "paris9"
    },
    {
      image: paris10,
      name: "paris10"
    },
    {
      image: paris11,
      name: "paris11"
    },
    {
      image: paris12,
      name: "paris12"
    },
  ]

  export default galleryData;