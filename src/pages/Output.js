import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import './Output.css';

const OutputPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { generatedCode } = location.state || {};

  // Redirect to the generate page if no code is available
  useEffect(() => {
    if (!generatedCode) {
      alert('No generated code available. Redirecting to the generation page.');
      navigate('/');
    }
  }, [generatedCode, navigate]);

  const downloadZip = () => {
    const zip = new JSZip();
    zip.file('index.html', generatedCode);
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'generated_website.zip');
    });
  };

  return (
    <div className="output-page">
      <div className="output-container">
        <h2 className="title">Generated Website Code</h2>
        <div className="preview-container">
          <h3>Preview:</h3>
          <iframe
            className="preview-frame"
            srcDoc={generatedCode}
            title="Website Preview"
          />
        </div>
        <div className="code-output">
          <h3>Generated Code:</h3>
          <pre>{generatedCode}</pre>
        </div>
        <button className="download-button" onClick={downloadZip}>
          Download as ZIP
        </button>
      </div>
    </div>
  );
};

export default OutputPage;
