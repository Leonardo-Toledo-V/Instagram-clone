import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Cookies from "js-cookie";
import { io } from 'socket.io-client';
const socket = io("http://localhost:3031");
import Swal from "sweetalert2";


export default function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [comment, setComment] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const token = Cookies.get('token');
    const params = {
      caption: comment,
      token:token,
      media: photo
  }
    socket.emit("POST", params);
    Swal.fire({
      icon: 'success',
      title: 'Publicación subida correctamente',
      showConfirmButton: false,
      timer: 1500
    });
  };


  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile != undefined) {
      setSelectedImage(URL.createObjectURL(selectedFile));
      setPhoto(selectedFile);
    }
  };



  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg w-[500px] ">
          <div className="mb-6">
            <div className="relative">
              <img
                src={selectedImage ? selectedImage : "/placeholder.png"}
                alt=""
                className="w-full max-h-[400px]"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                {selectedImage ? (
                  <label htmlFor="image-upload" className="rounded-md p-3 text-white text-md bg-slate-400
                font-bold 
                cursor-pointer">
                    Change photo
                  </label>
                ) : (
                  <label
                    htmlFor="image-upload"
                    className="flex justify-center items-center rounded-md text-white cursor-pointer px-4 py-2 h-44 w-40"
                  >
                    .
                  </label>
                )}
              </div>
            </div>
          </div>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            className="hidden max-h-1"
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="flex justify-center items-center" >
        <form className='flex items-center p-4  border-2 shadow-lg  w-[500px] mb-4'>
          <EmojiHappyIcon className='h-7' />
          <input type="text"
           onChange={(e) => setComment(e.target.value)}
          className='border-none flex-1 focus:ring-0
          outline-none
          ' placeholder="Add a comment..." />
          <button onClick={handleSubmit} className=' font-semibold text-blue-400'>Post</button>
        </form>
      </div>
    </div>

  );
}
