import React, { useState } from "react";
import { useUploadFile } from "react-firebase-hooks/storage";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { addDoc, collection, getFirestore } from "firebase/firestore";

interface Necklace {
  title: string;
  image: string;
  fr: string;
  eng: string;
  copyright: string;
}

const DataBaseFeeder = () => {
  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files; // Get the selected files
    setSelectedFiles(files);
  };

  const upload = async () => {
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const storageRef = ref(getStorage(), `necklacesImages/${file.name}`);
        const result = await uploadFile(storageRef, file, {
          contentType: file.type,
        });
        alert(`Result: ${JSON.stringify(result)}`);

        const imageUrl = await getDownloadURL(storageRef);
        const notesRef = collection(getFirestore(), "necklaces");

        const newNecklace: Necklace = {
          title: file.name,
          image: imageUrl,
          fr: "TESTTETSTEW",
          eng: "TESTSTESTSTES",
          copyright: "LKASJALKDJ",
        };

        // You may want to await this operation to make sure it's completed before moving to the next file
        await addDoc(notesRef, newNecklace).catch((e) => {});
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/jpeg"
        multiple // Allow multiple file selection
      />
      <button onClick={upload}>Upload</button>
    </div>
  );
};

export default DataBaseFeeder;
