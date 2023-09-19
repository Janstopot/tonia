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

import stlouis2 from "@/assets/images/exhibitions/stlouis/stlouis2.png"
import stlouis3 from "@/assets/images/exhibitions/stlouis/stlouis3.png"
import stlouis4 from "@/assets/images/exhibitions/stlouis/stlouis4.png"
import stlouis5 from "@/assets/images/exhibitions/stlouis/stlouis5.png"

import provence1 from "@/assets/images/exhibitions/provence/provence1.jpg"
import provence2 from "@/assets/images/exhibitions/provence/provence2.jpg"
import provence3 from "@/assets/images/exhibitions/provence/provence3.jpg"
import provence4 from "@/assets/images/exhibitions/provence/provence4.jpg"
import provence5 from "@/assets/images/exhibitions/provence/provence5.jpg"
import provence6 from "@/assets/images/exhibitions/provence/provence6.jpg"
import provence7 from "@/assets/images/exhibitions/provence/provence7.jpg"
import provence8 from "@/assets/images/exhibitions/provence/provence8.jpg"
import provence9 from "@/assets/images/exhibitions/provence/provence9.jpg"

import montpellier1 from "@/assets/images/exhibitions/montpellier/montpellier1.jpg"
import montpellier2 from "@/assets/images/exhibitions/montpellier/montpellier2.jpg"
import montpellier3 from "@/assets/images/exhibitions/montpellier/montpellier3.jpg"
import montpellier4 from "@/assets/images/exhibitions/montpellier/montpellier4.jpg"
import montpellier5 from "@/assets/images/exhibitions/montpellier/montpellier5.jpg"
import montpellier6 from "@/assets/images/exhibitions/montpellier/montpellier6.jpg"
import montpellier7 from "@/assets/images/exhibitions/montpellier/montpellier7.jpg"
import montpellier8 from "@/assets/images/exhibitions/montpellier/montpellier8.jpg"
import montpellier9 from "@/assets/images/exhibitions/montpellier/montpellier9.jpg"
import montpellier10 from "@/assets/images/exhibitions/montpellier/montpellier10.jpg"

import dakar1 from "@/assets/images/exhibitions/dakar/dakar1.jpg"
import dakar2 from "@/assets/images/exhibitions/dakar/dakar2.jpg"
import dakar3 from "@/assets/images/exhibitions/dakar/dakar3.jpg"
import dakar4 from "@/assets/images/exhibitions/dakar/dakar4.jpg"
import dakar5 from "@/assets/images/exhibitions/dakar/dakar5.jpg"
import dakar6 from "@/assets/images/exhibitions/dakar/dakar6.jpg"
import dakar7 from "@/assets/images/exhibitions/dakar/dakar7.jpg"
import dakar8 from "@/assets/images/exhibitions/dakar/dakar8.jpg"
import dakar9 from "@/assets/images/exhibitions/dakar/dakar9.jpg"
import dakar10 from "@/assets/images/exhibitions/dakar/dakar10.jpg"
import dakar11 from "@/assets/images/exhibitions/dakar/dakar11.jpg"
import dakar12 from "@/assets/images/exhibitions/dakar/dakar12.jpg"
import dakar13 from "@/assets/images/exhibitions/dakar/dakar13.jpg"
import dakar14 from "@/assets/images/exhibitions/dakar/dakar14.jpg"
import dakar15 from "@/assets/images/exhibitions/dakar/dakar15.jpg"
import dakar16 from "@/assets/images/exhibitions/dakar/dakar16.jpg"
import dakar17 from "@/assets/images/exhibitions/dakar/dakar17.jpg"
import dakar18 from "@/assets/images/exhibitions/dakar/dakar18.jpg"
import dakar19 from "@/assets/images/exhibitions/dakar/dakar19.jpg"
import dakar20 from "@/assets/images/exhibitions/dakar/dakar20.jpg"

import algiers1 from "@/assets/images/exhibitions/algiers/algiers1.jpg"
import algiers2 from "@/assets/images/exhibitions/algiers/algiers2.jpg"
import algiers3 from "@/assets/images/exhibitions/algiers/algiers3.jpg"
import algiers4 from "@/assets/images/exhibitions/algiers/algiers4.jpg"
import algiers5 from "@/assets/images/exhibitions/algiers/algiers5.jpg"
import algiers6 from "@/assets/images/exhibitions/algiers/algiers6.jpg"
import algiers7 from "@/assets/images/exhibitions/algiers/algiers7.jpg"
import algiers8 from "@/assets/images/exhibitions/algiers/algiers8.jpg"
import algiers9 from "@/assets/images/exhibitions/algiers/algiers9.jpg"
import algiers10 from "@/assets/images/exhibitions/algiers/algiers10.jpg"
import algiers11 from "@/assets/images/exhibitions/algiers/algiers11.jpg"
import algiers12 from "@/assets/images/exhibitions/algiers/algiers12.jpg"

import gallerium1 from "@/assets/images/exhibitions/gallerium/gallerium1.png"


export interface Gallery {
  image: StaticImageData;
  name: string;
  place: string;
}

const galleryData: Gallery[] = [
  {
    image: gallerium1,
    name: "gallerium1",
    place: "gallerium"
  },
  {
    image: paris1,
    name: "paris1",
    place: "paris"
  },
  {
    image: paris2,
    name: "paris2",
    place: "paris"
  },
  {
    image: paris3,
    name: "paris3",
    place: "paris"
  },
  {
    image: paris4,
    name: "paris4",
    place: "paris"
  },
  {
    image: paris5,
    name: "paris5",
    place: "paris"
  },
  {
    image: paris6,
    name: "paris6",
    place: "paris"
  },
  {
    image: paris7,
    name: "paris7",
    place: "paris"
  },
  {
    image: paris8,
    name: "paris8",
    place: "paris"
  },
  {
    image: paris9,
    name: "paris9",
    place: "paris"
  },
  {
    image: paris10,
    name: "paris10",
    place: "paris"
  },
  {
    image: paris11,
    name: "paris11",
    place: "paris"
  },
  {
    image: paris12,
    name: "paris12",
    place: "paris"
  },
  {
    image: stlouis2,
    name: "stlouis2",
    place: "stlouis"
  }, {
    image: stlouis3,
    name: "stlouis3",
    place: "stlouis"
  },
  {
    image: stlouis4,
    name: "stlouis4",
    place: "stlouis"
  },
  {
    image: stlouis5,
    name: "stlouis5",
    place: "stlouis"
  },
  {
    image: provence1,
    name: "provence1",
    place: "provence"
  },
  {
    image: provence2,
    name: "provence2",
    place: "provence"
  },
  {
    image: provence3,
    name: "provence3",
    place: "provence"
  },
  {
    image: provence4,
    name: "provence4",
    place: "provence"
  },
  {
    image: provence5,
    name: "provence5",
    place: "provence"
  },
  {
    image: provence6,
    name: "provence6",
    place: "provence"
  },
  {
    image: provence7,
    name: "provence7",
    place: "provence"
  },
  {
    image: provence8,
    name: "provence8",
    place: "provence"
  },
  {
    image: provence9,
    name: "provence9",
    place: "provence"
  },
  {
    image: montpellier1,
    name: "montpellier1",
    place: "montpellier"
  },
  {
    image: montpellier2,
    name: "montpellier2",
    place: "montpellier"
  },
  {
    image: montpellier3,
    name: "montpellier3",
    place: "montpellier"
  },
  {
    image: montpellier4,
    name: "montpellier4",
    place: "montpellier"
  },
  {
    image: montpellier5,
    name: "montpellier5",
    place: "montpellier"
  },
  {
    image: montpellier6,
    name: "montpellier6",
    place: "montpellier"
  },
  {
    image: montpellier7,
    name: "montpellier7",
    place: "montpellier"
  },
  {
    image: montpellier8,
    name: "montpellier8",
    place: "montpellier"
  },
  {
    image: montpellier9,
    name: "montpellier9",
    place: "montpellier"
  },
  {
    image: montpellier10,
    name: "montpellier10",
    place: "montpellier"
  },
  {
    image: dakar1,
    name: "dakar1",
    place: "dakar"
  },
  {
    image: dakar2,
    name: "dakar2",
    place: "dakar"
  },
  {
    image: dakar3,
    name: "dakar3",
    place: "dakar"
  },
  {
    image: dakar4,
    name: "dakar4",
    place: "dakar"
  },
  {
    image: dakar5,
    name: "dakar5",
    place: "dakar"
  },
  {
    image: dakar6,
    name: "dakar6",
    place: "dakar"
  },
  {
    image: dakar7,
    name: "dakar7",
    place: "dakar"
  },
  {
    image: dakar8,
    name: "dakar8",
    place: "dakar"
  },
  {
    image: dakar9,
    name: "dakar9",
    place: "dakar"
  },
  {
    image: dakar10,
    name: "dakar10",
    place: "dakar"
  },
  {
    image: dakar11,
    name: "dakar1",
    place: "dakar"
  },
  {
    image: dakar12,
    name: "dakar2",
    place: "dakar"
  },
  {
    image: dakar13,
    name: "dakar3",
    place: "dakar"
  },
  {
    image: dakar14,
    name: "dakar4",
    place: "dakar"
  },
  {
    image: dakar15,
    name: "dakar5",
    place: "dakar"
  },
  {
    image: dakar16,
    name: "dakar6",
    place: "dakar"
  },
  {
    image: dakar17,
    name: "dakar7",
    place: "dakar"
  },
  {
    image: dakar18,
    name: "dakar8",
    place: "dakar"
  },
  {
    image: dakar19,
    name: "dakar9",
    place: "dakar"
  },
  {
    image: dakar20,
    name: "dakar10",
    place: "dakar"
  },
  {
    image: algiers1,
    name: "algiers1",
    place: "algiers"
  },
  {
    image: algiers2,
    name: "algiers2",
    place: "algiers"
  },
  {
    image: algiers3,
    name: "algiers3",
    place: "algiers"
  },
  {
    image: algiers4,
    name: "algiers4",
    place: "algiers"
  },
  {
    image: algiers5,
    name: "algiers5",
    place: "algiers"
  },
  {
    image: algiers6,
    name: "algiers6",
    place: "algiers"
  },
  {
    image: algiers7,
    name: "algiers7",
    place: "algiers"
  },
  {
    image: algiers8,
    name: "algiers8",
    place: "algiers"
  },
  {
    image: algiers9,
    name: "algiers9",
    place: "algiers"
  },
  {
    image: algiers10,
    name: "algiers10",
    place: "algiers"
  },
  {
    image: algiers11,
    name: "algiers11",
    place: "algiers"
  },
  {
    image: algiers12,
    name: "algiers12",
    place: "algiers"
  },
]

export default galleryData;