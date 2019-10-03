import React, {Component} from 'react';
import Header from '../header/header';
import { Document, Page, pdfjs } from "react-pdf";
import './resume.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
      }
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
    render () {
        return(
            <div>
                <Header/>
                <div className="container">
                    <h3>
                        Thank you for spending your time to look up my resume
                    </h3>
                    <div className="resume">
                        <Document className="document"
                        file={process.env.PUBLIC_URL + '/Resume.pdf'}
                        >
                        <Page pageNumber={1} />
                        </Document>
                    </div>
                
                <button>Go to proeject</button>

                </div>
            </div>
        )
    }
}

export default Resume;