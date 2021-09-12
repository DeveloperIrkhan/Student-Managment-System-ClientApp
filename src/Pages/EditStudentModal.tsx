import React from 'react'
import { Modal } from 'react-bootstrap';
interface Props {
    show?: boolean,
    onHide?: () => void,
    onUpdate?: () => void,
    StudentName?: string
}

interface State { }

export class EditStudentModal extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div className="">
                <Modal
                    show={this.props.show}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Update Student
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>{this.props.StudentName}</h4>
                        <div className="col-12">
                        <div className="Textbox-div">
                                <input
                                    className="form-control my-2"
                                    placeholder="ID"
                                    type="text"
                                    disabled
                                />
                            </div>
                            <div className="Textbox-div">
                                <input
                                    className="form-control my-2"
                                    placeholder="Here Your First Name"
                                    type="text"
                                />
                            </div>
                            <div className="Textbox-div">
                                <input
                                    className="form-control my-2"
                                    placeholder="Here Your Middle Name" type="text"
                                />
                            </div>
                            <div className="Textbox-div">
                                <input
                                    className="form-control my-2"
                                    placeholder="Here Your Last Name" type="text"
                                />
                            </div>
                            <div className="Textbox-div">
                                <input
                                    className="form-control my-2"
                                    placeholder="Your Registeration No" type="text"
                                />
                            </div>
                            <div className="Textbox-div">
                                <input
                                    className="form-control my-2"
                                    placeholder="Your Phone No" type="text"
                                />
                            </div>
                            <div className="Textbox-div">
                                <input
                                    className="form-control my-2"
                                    placeholder="Your Full Address" type="text"
                                />
                            </div>
                            <div className="Textbox-div">
                                <input
                                    className="form-control my-2"
                                    placeholder="Your Department" type="text"
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>

                        <button className="btn btn-success"
                            onClick={
                                this.props.onUpdate
                            }>
                            Update
                        </button>
                        <button className="btn btn-secondary"
                            onClick={
                                this.props.onHide}>
                            Cancel
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}