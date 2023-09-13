import React, { useState } from "react";
import { useUploadFile } from "react-firebase-hooks/storage";
import { getStorage, ref } from "firebase/storage";


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
        const storageRef = ref(getStorage(), `necklacesImages/${file.name.toUpperCase()}`);
        const result = await uploadFile(storageRef, file, {
          contentType: file.type,
        });
        //alert(`Result: ${JSON.stringify(result)}`);
      }
    }
  };

  return (
    <div>
      <h1>UPLOADING PHOTOS</h1>
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
