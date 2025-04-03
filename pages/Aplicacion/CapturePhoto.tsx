import React, { useState } from 'react';

interface CapturePhotoProps {
  onCapture: (photo: File) => void;
}

const CapturePhoto: React.FC<CapturePhotoProps> = ({ onCapture }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // Leer la imagen para mostrar una vista previa
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Pasar el archivo al componente padre
      onCapture(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" capture="user" onChange={handlePhotoChange} />
      {selectedPhoto && <img src={selectedPhoto} alt="Selected" />}
    </div>
  );
};

export default CapturePhoto;
