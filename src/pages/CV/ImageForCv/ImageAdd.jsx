import axios from "axios";
//import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import ImageForCvService from "../../../services/imageForCvService";

export default function ImageAdd() {
  const [imageSelected, setImageSelected] = useState(null);

  useEffect(() => {
    let imageService = new ImageForCvService();
    //imageService.add(2,imageSelected)
    imageService.add(14,imageSelected).then((response) => setImageSelected(response.data.data));
  });

  const uploadImage = () => {
    //console.log(files[0]);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "gnccxgks");
     axios
       .post("https://api.cloudinary.com/v1_1/ktu/image/upload", formData).then((response) => setImageSelected(response.data.secure_url))
    
      console.log(imageSelected);
      console.log(formData);
  };
  return (
    <div>
      <Input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <Button onClick={uploadImage}>Upload Image</Button>
    </div>
  );
}
