import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import FormUploadRun from './FormUpload.run';

class FormUpload extends React.Component {
    componentDidMount() {
        FormUploadRun();
    }
    render() {
        return (
            <ContentWrapper>
                <Grid fluid>
                    <p className="text-center">Dropzone<br/><small>DropzoneJS is an open source library that provides drag&apos;n&apos;drop file uploads with image previews.</small><br/><small className="spr">It’s lightweight, doesn’t depend on any other library (like jQuery) and is</small><small><a href="http://www.dropzonejs.com/" target="_blank">highly customizable</a></small></p>
                    <form id="dropzone-area" action="#" className="well dropzone" style={{minHeight:"160px"}}>
                        <Button type="submit" bsStyle="primary" className="pull-right">Upload!</Button>
                        <div className="dropzone-previews"></div>
                    </form>
                    <p><small>This demo does not upload files to any server.</small></p>
                </Grid>
            </ContentWrapper>
            );
    }

}

export default FormUpload;

