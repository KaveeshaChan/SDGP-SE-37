
import './appPage.css';

export default function AppPage() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const imageFile = event.dataTransfer.files[0];
    handleImageUpload(imageFile);
  };

  const handleImageUpload = (imageFile) => {
    // Perform any necessary processing on the uploaded image
    setUploadedImage(URL.createObjectURL(imageFile));
  };

  const handleFileInputChange = (event) => {
    const imageFile = event.target.files[0];
    handleImageUpload(imageFile);
  };

  return (
    <>

    <div className="guidelines-container">
      <h2 className="guidelines-heading">Guidelines for Users</h2>
      <p className="p">Some descriptive text explaining this guideline.</p>
      {/* ... more guidelines */}
    </div>
    <div className="section">
      <section className='image-uploader'>
        <h2 className="imageText">Drop your image here</h2>
        <h2 className="imageText2"> -or- </h2>
        <h2 className="imageText">Click to Upload</h2> 
      </section>
      <section className='selection'>
      <section className="brand-type-selector">
        <h2>Select brand</h2>
        <select name="brand">
          <option value="Toyota">Toyota</option>
          <option value="Toyota1">Toyota1</option>
          <option value="Toyota2">Toyota2</option>
        </select>
        <h2>Select type</h2>
        <select name="type">
          <option value="Car">Car</option>
          <option value="Car1">Car1</option>
          <option value="Car2">Car2</option>
        </select>
      </section>
      <button className="proceed-button">Proceed</button>

      </section>
    </div>
    </>
  );
}
