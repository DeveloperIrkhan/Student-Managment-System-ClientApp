import React from 'react'
import { Modal } from 'react-bootstrap';
interface Props {
    show?: boolean,
    onHide?: () => void,
    onDelete?: () => void,
    StudentName?:string
}

interface State { }

export class ModelBox extends React.Component<Props, State> {
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
                            Delete Student
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Student Name : {this.props.StudentName}</h4>
                        <p>
                            <b>Are You Sure You want to delete?</b>
                        </p>
                    </Modal.Body>
                    <Modal.Footer>

                        <button className="btn btn-danger"
                            onClick={
                                this.props.onDelete
                            }>
                                Delete
                        </button>
                        <button className="btn btn-success"
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