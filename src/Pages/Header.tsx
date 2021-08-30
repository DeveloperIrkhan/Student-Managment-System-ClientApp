import React from 'react'
import { Link } from 'react-router-dom';
interface Props { }

interface State { }

export class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark">
                <div className="container">
                <Link className="navstyle" to="/"><span className="navbar-brand">Student Management System</span></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                                <Link className="navstyle" to="/add-new-students">
                                    <span className="nav-link"><i className="bi bi-person-plus-fill"></i>    Add new Student</span>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="navstyle" to="/get-all-students">
                                    <span className="nav-link"><i className="bi bi-list-ul"></i>    Student List</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navstyle" to="/get-one-students">
                                    <span className="nav-link"><i className="bi bi-search"></i>   Find Student</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}