import React, { useState } from "react";
import styles from "./Woman.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
//import woman1 from "../../../../assets/images/woman-necklances/1.png";
//import woman2 from "../../../../assets/images/woman-necklances/2.png"
import woman1 from "../../../../assets/images/woman-necklances/womannecklace1.jpg";
import woman2 from "../../../../assets/images/woman-necklances/womannecklace2.jpg";
import Detail from "./Detail/Detail";

function Woman() {

  const [showDetails, setShowDetails] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleViewDetails = (index : number) => {
    setIndex(index)
    setShowDetails(!showDetails);

  };

  interface thumbnail {
    image: StaticImageData;
    name: string;
    description: string;
  }

  let thumbnailList: thumbnail[] = [
    {
      image: woman1,
      name: "ROMAN HEAD",
      description: "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
    {
      image: woman2,
      name: "ROMAN HEAD2",
      description: "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
    {
      image: woman1,
      name: "ROMAN HEAD",
      description: "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
    {
      image: woman2,
      name: "ROMAN HEAD2",
      description: "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
    {
      image: woman1,
      name: "ROMAN HEAD",
      description: "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
    {
      image: woman2,
      name: "ROMAN HEAD2",
      description: "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        {thumbnailList.map((thumbnail, index) => (
          <button onClick={() => toggleViewDetails(index)} className={styles.image} key={index} >
            <div className={styles.text}>{thumbnail.name}</div>
            <Image src={thumbnail.image} alt="NecklaceImage" />
          </button>
        ))}
      </div>

      {showDetails && <Detail data={thumbnailList} selectedIndex={index} />}
    </div>

    
  );
}

export default Woman;
