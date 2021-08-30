import React from 'react'
import { Modal } from 'react-bootstrap';
interface Props 
{
     show?:boolean,
     onHide?: () => void;
     onDelete?:()=>void;
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
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-success"onClick={this.props.onDelete}>Delete</button>
                        <button className="btn btn-success" onClick={this.props.onHide}>Cancel</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}