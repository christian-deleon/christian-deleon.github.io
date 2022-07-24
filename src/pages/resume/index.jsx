import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Hero from "./../../components/hero/index";
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
      </Hero>

      <section className="block">
        <div className="container pdf-container">
          <Document
            className="pdf-document"
            file="./resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              scale={width > 792 ? 1.3 : 1}
            />
          </Document>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Resume;
