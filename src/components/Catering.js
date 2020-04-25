import React, { Fragment } from 'react';
import Menu from '../images/catering.pdf';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Catering = () => {
  return (
    <Fragment>
      <div
        className="body"
        style={{ background: '#fff', textAlign: 'center', margin: '0 0 0 0' }}
      >
        <div
          className="body-content"
          display="block"
          id="test"
          style={{ margin: '0', padding: '50px' }}
        >
          <div style={{ alignSelf: 'center' }}>
            <Document file={Menu}>
              <Page pageNumber={1}></Page>
            </Document>
            <p className="text-justify lead" style={{marginTop: '3rem'}}>
              Have a party or other special event coming up? Don't worry,
              whether your group is small or big, you can arrange your next
              event to be catered with our fresh, authentic, and delicious
              contemporary Mexican cuisine. You can either pick your order up or
              have your party on site in our lovely garden patio that can
              accommodate up to 100 guests (weather allowing). We make your
              party planning a easy when you choose our catering or host your
              event at Las Cazuelas Restaurant. Your guests will be delighted
              and your event will go smoothly.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Catering;
