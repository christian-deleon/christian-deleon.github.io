import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Hero from "./../../components/hero/index";
import Button from "./../../components/button/index";
import PDFFile from "../../assets/christian-deleon-resume.pdf";
import "./style.css";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(792);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <React.Fragment>
      <Hero>
        <h1 className="hero__heading">Resume</h1>
        <a href={PDFFile} download>
          <Button>
            <span className="btn-text">Download</span>
          </Button>
        </a>
      </Hero>

      <section className="block">
        <div className="container pdf-container">
          <a href={PDFFile} target="_blank">
            <Document
              className="pdf-document"
              file={PDFFile}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                scale={width > 792 ? 2 : 1}
              />
            </Document>
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Resume;
