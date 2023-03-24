const { useState } = require("react");

function Upload() {
        const [file, setFile] = useState(null);
        const [description, setDescription] = useState("");
      
        const handleFileChange = (e) => {
          setFile(e.target.files[0]);
        };
      
        const handleDescriptionChange = (e) => {
          setDescription(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
     //logic

        };



  return (
    <div className="w-full max-w-xs mx-auto">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
          Descripción
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          placeholder="Descripción de la foto"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
          Foto
        </label>
        <input
          type="file"
          accept=".jpg, .png, .jpeg"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="photo"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Subir foto
        </button>
      </div>
    </form>
  </div>
  )
}

export default Upload
