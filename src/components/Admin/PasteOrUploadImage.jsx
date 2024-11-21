import React from 'react';

const PasteOrUploadImage = ({ setFile,setImageSrc,imageSrc }) => {

  const handlePaste = async (e) => {
    const items = e.clipboardData.items;
    //หา .kind ที่เป็น file และ มี type เป็น img 
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.kind === 'file' && item.type.startsWith('image/')) {
        const file = item.getAsFile();
        
        handleUpload(file);
      }
    }
  };

  //สร้าง url
  const handleUpload = async (file) => {
    const imageUrl = URL.createObjectURL(file);
    console.log("prepare file",file);
    setFile(file)
    setImageSrc(imageUrl);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      handleUpload(file);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <input
        onPaste={handlePaste}
        className='input input-bordered input-primary w-full max-w-xs'
        placeholder="Paste an image here..."
        style={{ width: '300px', height: '25px', marginBottom: '20px' }}
      />
      <input
        type="file"
        accept="image/*"
        className='h-8 file-input file-input-bordered file-input-warning w-full max-w-xs'
        onChange={handleFileChange}
        style={{ display: 'block', marginBottom: '20px' }}
      />
      {imageSrc && (
        <div className='flex flex-col relative'>
          <div className='flex justify-between '>
            <h4>Pasted Image:</h4>
            <button className="btn btn-circle btn-outline absolute top-0  -right-6" onClick={() => setImageSrc(null)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <img src={imageSrc} alt="Pasted" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default PasteOrUploadImage;
