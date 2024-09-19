import React from 'react';

const MapComponent: React.FC = () => {
  const googleKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;
  const location = 'Calle 74a 50 38, Bogota Colombia';
  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden', color: 'red', width: '500px', height: '500px' }}>
      <div id="my-map-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
        <iframe
          style={{ height: '100%', width: '100%', border: 0 }}
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(location)}&key=${googleKey}`}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <style jsx>{`
        #my-map-canvas .text-marker {
          color: red;
        }
        .map-generator {
          max-width: 100%;
          max-height: 100%;
          background: none;
        }
      `}</style>
    </div>
  );
};

export default MapComponent;
