import React, { useState } from "react";

export function Upload() {
  
    const [files, setFiles] = useState<string | ArrayBuffer>();

    const typeValidation = (e: React.ChangeEvent<HTMLInputElement>) =>{

        if (e.target.files != null && e.target.files[0].name != 'application/json') {
            alert('Please select JSON files only!');
            //setFiles(null);
            return;
        } else {
            //???
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        console.log(e.target.value)

        if (e.target.files != null){
            const fileReader = new FileReader();
            fileReader.readAsText(e.target.files[0], "UTF-8");
            fileReader.onload = (e2: ProgressEvent<FileReader>) => {
                
                if (e2.target != null && e2.target.result != null) {
                    setFiles(e2.target.result);
                } else {
                    //???
                }
            };
        } else {
            //???
        }

        console.log(files)

  };
  return (
    <div className="Upload">
        <h1>Daten-Upload</h1>
        <h2>Lade dein JSON File und die dazugehörigen Bilder hoch</h2> 
        <input type="file" accept=".json" onChange={handleChange} />
        <br />
        { "uploaded file content -- " + files};
    </div>
  );
}