import React from 'react'
interface Props { }

interface State { }

export class AddStudent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <div className="row col-12">
                    <form action="">
                    <div className="col-lg-5 col-12 m-auto m-0">
                        <h5 className="text-muted" >Please Enter Your Full Name</h5>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Here Your First Name" type="text" />
                        </div>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Here Your Middle Name" type="text" />
                        </div>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Here Your Last Name" type="text" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 m-auto m-0">
                    <h5 className="text-muted" >Please Enter Other's cradincial</h5>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Your Registeration No" type="text" />
                        </div>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Your Phone No" type="text" />
                        </div>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Your Full Address" type="text" />                            
                        </div>
                        <div className="">
                            <input className="myInput border-3 form-control m-2" placeholder="Your Department" type="text" />
                        </div>
                    </div>
                    </form>
                </div>
        )
    }
}