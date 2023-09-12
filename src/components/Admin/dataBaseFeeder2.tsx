import React, { useState } from "react";
import { useUploadFile } from "react-firebase-hooks/storage";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { addDoc, collection, getFirestore } from "firebase/firestore";

interface Entry {
  title: string;
  fr: string;
  eng: string;
  copyright: string;
}

const DataBaseFeeder2 = () => {

  const [fileContent, setFileContent] = useState<string | null>(null);


  function parseText(inputText: string): Entry[] {
    const entries: Entry[] = [];
    const lines = inputText.split('\n').map((line) => line.trim());
  
    let currentEntry: Partial<Entry> = {};
  
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
  
      if (!line) continue;
  
      if (!currentEntry.title) {
        currentEntry.title = line;
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
        entries.push(currentEntry as Entry);
        currentEntry = {};
      }
    }
    console.log(entries)
  
    return entries;
  }
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const content = e.target.result as string;
          setFileContent(content);
        }
      };
      reader.readAsText(file);
      console.log(parseText(file.toString()))
    }
  };


  return (
    <div>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      {fileContent && (
        <div>
          {/* Display the parsed entries here */}
          {parseText(fileContent).map((entry, index) => (
            <div key={index}>
              <h3>{entry.title}</h3>
              <p>FR: {entry.fr}</p>
              <p>ENG: {entry.eng}</p>
              <p>Copyright: {entry.copyright}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataBaseFeeder2;
