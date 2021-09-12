import * as React from "react";

interface Props {
    idforboth?: string;
    lanchButton?: string;
    lanchButtonText?: string;
    ShowHeadingCenter?: boolean;
    HeadingText?: string;
    insideText?: string;
    cancelBtn?: string;
    saveBtn?: string;
    fullSize?: string;
    isCenterDailoge?: boolean;
    isBtnCenter?: boolean;
    onDeleteMethod?: () => void;
    onCancelMethod?: () => void;
    showHeaderCloseBtn?: boolean;
    deleteBtn: string;
}

interface State { }

export class CustomModel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        const { ShowHeadingCenter, insideText, deleteBtn, fullSize, isCenterDailoge, lanchButtonText, showHeaderCloseBtn, idforboth, HeadingText, cancelBtn, saveBtn } = this.props;
        return (
            <div className="" style={{ maxWidth: "80vw", maxHeight: "70vh" }}>
                <div className="" id={`staticBackdrop${idforboth}`} data-keyboard="true" tab-index="-1" aria-labelledby={`staticBackdropLabel${idforboth}`} aria-hidden="true">
                    <div className={`modal-dialog  ${fullSize && `modal-${fullSize}`} ${isCenterDailoge && "modal-dialog-centered"}`}>
                        <div className={`modal-content r-10 ${fullSize && "modal-content-1"} `}>
                            <div className={`${HeadingText ? "modal-header" : ""}`}>
                                <h6 className={`f-20-b modal-title ${ShowHeadingCenter ? "d-block m-auto pr-0 content-align-center" : ""}`} id={`staticBackdropLabel${idforboth}`}>
                                    {HeadingText}
                                </h6>
                                {showHeaderCloseBtn && (
                                    <button type="button" className="close btn align-self-start" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">X</span>
                                    </button>
                                )}
                            </div>
                            <div className="px-2 py-4 text-danger">
                                <h5>{insideText}</h5>
                            </div>
                            <div className={`${saveBtn || cancelBtn || deleteBtn ? "modal-footer d-flex" : ""}`}>

                                {saveBtn && (
                                    <button type="button" className={`py-2 px-5 btn btn-outline-danger rounded-pill`} data-dismiss="modal" onClick={this.props.onDeleteMethod}>
                                        {saveBtn}
                                    </button>
                                )}
                                {deleteBtn && (
                                    <button type="button" className={`py-2 px-5 btn btn-outline-danger rounded-pill`} data-dismiss="modal" onClick={this.props.onDeleteMethod}>
                                        {deleteBtn}
                                    </button>
                                )}
                                {cancelBtn && (
                                    <button type="button" className={`py-2 px-5 btn btn-outline-success rounded-pill`} data-dismiss="modal" onClick={this.props.onCancelMethod}>
                                        {cancelBtn}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
