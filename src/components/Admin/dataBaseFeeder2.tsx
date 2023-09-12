import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import React, { useState } from "react";

interface Necklace {
  title: string;
  image: string;
  fr: string;
  eng: string;
  copyright: string;
}

const DataBaseFeeder2 = () => {

  const [fileContent, setFileContent] = useState<string | null>(null);

  const parseText = (inputText: string): Necklace[] => {
    const entries: Necklace[] = [];
    const lines = inputText.split('\n').map((line) => line.trim());
  
    let currentEntry: Partial<Necklace> = {};
  
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
  
      if (!line) continue;
  
      if (!currentEntry.title) {
        currentEntry.title = line.slice(0,-1);
      } else if (line.startsWith('FR')) {
        currentEntry.fr = '';
        while (i + 1 < lines.length && !lines[i + 1].startsWith('ENG') && !lines[i + 1].startsWith('©')) {
          i++;
          currentEntry.fr += lines[i] + '\n';
        }
      } else if (line.startsWith('ENG')) {
        currentEntry.eng = '';
        while (i + 1 < lines.length && !lines[i + 1].startsWith('FR') && !lines[i + 1].startsWith('©')) {
          i++;
          currentEntry.eng += lines[i] + '\n';
        }
      } else if (line.startsWith('©')) {
        currentEntry.copyright = line.substring(2);
        entries.push(currentEntry as Necklace);
        currentEntry = {};
      }
    }
    console.log(entries)
    
    entries.forEach(async function(neck){
      const storageRef = ref(getStorage(), `necklacesImages/${neck.title}.JPG`);
      const imageUrl = await getDownloadURL(storageRef);
      const notesRef = collection(getFirestore(), "necklaces");

      const newNecklace: Necklace = {
        title: neck.title,
        image: imageUrl,
        fr: neck.fr,
        eng: neck.eng,
        copyright: neck.copyright,
      };

      // You may want to await this operation to make sure it's completed before moving to the next file
      await addDoc(notesRef, newNecklace).catch((e) => {});
    })
    
  
    return entries;
  }
  
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
        const content = await readFileAsText(file);
        setFileContent(content);
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const content = event.target.result as string;
          resolve(content);
        }
      };
      reader.onerror = (event) => {
        reject(new Error("Error reading file"));
      };
      reader.readAsText(file);
    });
  };

  const parsedEntries = fileContent ? parseText(fileContent) : [];

  return (
    <div>
      <input type="file" accept=".txt" onChange={handleFileChange} />
    </div>
  );
};

export default DataBaseFeeder2;
