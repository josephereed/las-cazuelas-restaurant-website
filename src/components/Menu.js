import React, { Fragment } from 'react';
import Menu from '../images/menu.pdf';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Catering = () => {
  return (
    <Fragment>
      <div
        style={{ background: 'black', textAlign: 'center', margin: '0 0 0 0' }}
      >
        <div
          
          id="test"
          style={{ float: 'left', margin: '0', padding: '75px', width: '30%' }}
        >
          <div style={{ alignSelf: 'center' }}>
            <Document style={{ float: 'left'}} file={Menu}>
              <Page pageNumber={1} scale={.75}></Page>
            </Document>
            {/* <p className="text-justify lead" style={{ marginTop: '3rem' }}>
            </p> */}
          </div>
        </div>
        <div
          
          id="test"
          style={{ float: 'right', margin: '0', padding: '75px' }}
        >
          <div style={{ alignSelf: 'center' }}>
            <Document style={{ float: 'left'}} file={Menu}>
              <Page pageNumber={2} scale={.75}></Page>
            </Document>
            {/* <p className="text-justify lead" style={{ marginTop: '3rem' }}>
            </p> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Catering;
