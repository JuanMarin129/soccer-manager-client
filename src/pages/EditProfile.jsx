import React, { useEffect, useState } from 'react'
import service from '../services/config.services';
import { Link } from 'react-router-dom';

function EditProfile() {

    const [dataUser, setDataUser] = useState(null)
    //const [imageUrl, setImageUrl] = useState(null); 
    const [isUploading, setIsUploading] = useState(false); // for a loading animation effect


    useEffect(() => {
        getUser();
    },[])
  

    const getUser = async () => {
        try {
            const response = await service.get("/user/profile")
            setDataUser(response.data)
            console.log(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        let cloneUser = {...dataUser}
        cloneUser[e.target.name] = e.target.value 
        setDataUser(cloneUser)
        console.log(dataUser)
    }

    // below function should be the only function invoked when the file type input changes => onChange={handleFileUpload}
    const handleFileUpload = async (event) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
  
    if (!event.target.files[0]) {
      // to prevent accidentally clicking the choose file button and not selecting a file
      return;
    }
  
    setIsUploading(true); // to start the loading animation
  
    const uploadData = new FormData(); // images and other files need to be sent to the backend in a FormData
    uploadData.append("image", event.target.files[0]);
    //                   |
    //     this name needs to match the name used in the middleware in the backend => uploader.single("image")
  
    try {
      const response = await service.post("/upload", uploadData)
      // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)
  
      console.log(response.data.imageUrl)
      //                          |
      //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });
  
      setIsUploading(false); // to stop the loading animation
     
      //setImageUrl(response.data.imageUrl)
      //console.log(imageUrl)


      // Lo añadimos a la Data del Usuario
      let cloneUser = {...dataUser}
      cloneUser[event.target.name] = response.data.imageUrl
      setDataUser(cloneUser)
      console.log(dataUser)

    } catch (error) {
      navigate("/error");
    }
  };



    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            await service.patch("/user/profile", dataUser)
            console.log("Ficha Usuario Editada con ÉXITO")
        } catch (error) {
            console.log(error)
        }
            
    }

    
    // Cláusula de Guardia
    if(dataUser === null) {
        return <h3>Espere por favor, estamos trayendo la data...</h3>
    }


 return (
    <div>

        <h1>Editar Perfil Usuario</h1>
        <form className="formularioCSS" onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input type="text" name="nombre" placeholder={dataUser.nombre}  onChange={handleChange} />
            <label>Apellidos:</label>
            <input type="text" name="apellidos" placeholder={dataUser.apellidos} onChange={handleChange} />
            <label>Fecha de Nacimiento:</label>
            <input type="date" name="fechaNacimiento" onChange={handleChange}  />
            <label>País de Nacionalidad:</label>
            <input type="text" name="PaisNacionalidad" onChange={handleChange} />
            <label>Foto: </label>
            <input
                type="file"
                name="foto"
                onChange={handleFileUpload}
                disabled={isUploading}
            />
            {/* below disabled prevents the user from attempting another upload while one is already happening */}
            {isUploading ? <h3>... uploading image</h3> : null}
            {dataUser.foto ? (<div><img src={dataUser.foto} alt="img" width={200} /></div>) : null}
            <label>Teléfono:</label>
            <input type="text" name="telefono" onChange={handleChange} />
            <label>Equipo:</label>
            <input type="text" name="equipo" onChange={handleChange} />
            <button type="submit">Editar Ficha Usuario</button>
      </form>      

    </div>
  )
}

export default EditProfile
