import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App container-fluid">
      <div className="row border">
        <div className="col-12">
      <Title/>
      <UploadForm />
        </div>
        <div className="row border">
        <div className="col-3">
            <ImageGrid setSelectedImg={ setSelectedImg } />
          </div>
          <div className="col-9">
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        ) }
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
