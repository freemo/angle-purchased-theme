import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import FormCropperRun from './FormCropper.run';

class FormCropper extends React.Component {
    componentDidMount() {
        this.cropperElement = FormCropperRun();
    }
    componentWillUnmount() {
        this.cropperElement.cropper('destroy');
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Image Cropper
                   <small>Simple image cropping plugin.</small>
                </h3>
                <Grid>
                    <Row>
                        <Col lg={ 8 }>
                            <div className="img-container mb-lg">
                                <img src="img/mb-sample.jpg" alt="Picture" />
                            </div>
                        </Col>
                        <Col lg={ 4 }>
                            <div className="docs-preview clearfix">
                                <div className="img-preview preview-lg"></div>
                                <div className="img-preview preview-md"></div>
                                <div className="img-preview preview-sm"></div>
                                <div className="img-preview preview-xs"></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt">
                        <Col lg={ 4 }>
                            <label htmlFor="inputImage" title="Upload image file" className="btn btn-info btn-upload">
                                <input id="inputImage" name="file" type="file" accept="image/*" className="sr-only" />
                                <span data-toggle="tooltip" title="Import image with Blob URLs" className="docs-tooltip">
                                Upload image
                                </span>
                            </label>
                        </Col>
                    </Row>
                </Grid>
            </ContentWrapper>
            );
    }

}

export default FormCropper;
