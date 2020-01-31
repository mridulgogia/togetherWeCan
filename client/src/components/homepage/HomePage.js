import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from "react-bootstrap/FormControl";
import {FormGroup} from "react-bootstrap";
import { loginHandler } from "../../actions/homepageAction";
import { connect } from 'react-redux';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

class HomePage extends Component{
    constructor(props) {
        super();

        this.state  = {
            emailLogin: "",
            passwordLogin: "",
            fullnameSignup:"",
            emailSignup:"",
            passwordSignup: "",
            genderSignup: ''
        }

        this.genderOnClick = this.genderOnClick.bind(this);
        this.updateLoginForm = this.updateLoginForm.bind(this);
        this.updateSignupForm = this.updateSignupForm.bind(this);
        this.handleLoginBtn = this.handleLoginBtn.bind(this);
        this.handleSignupBtn = this.handleSignupBtn.bind(this);
    }

    genderOnClick(event) {
        const {name, id} = event.target;
        this.setState({[name]: id});
    }

    updateLoginForm(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    updateSignupForm(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleLoginBtn(event) {
        event.preventDefault();
        const postData = {
            email: this.state.emailLogin,
            password: this.state.passwordLogin
        }
        this.handleLoginBtn(postData)

    }

    render(){
        return (<div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">TogetherWECAN</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home"></Nav.Link>
                {/*    <Nav.Link href="#features">Features</Nav.Link>*/}
                {/*    <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                </Nav>

                <Form inline>
                        <FormControl
                            type="email"
                            name="emailLogin"
                            value={this.state.emailLogin}
                            placeholder="email id"
                            className="mr-sm-2"
                            onChange={this.updateLoginForm}
                        />
                        <FormControl
                            type={"password"}
                            placeholder="password"
                            name="passwordLogin"
                            value={this.state.passwordLogin}
                            className = "mr-sm-2"
                            onChange={this.updateLoginForm}
                        />
                        <Button
                            variant="outline-light"
                            className="login-btn"
                            onClick={this.handleLoginBtn}
                        >
                            Login
                        </Button>
                    </Form>
            </Navbar>

            <div className="container" >
                <div className="row" >
                    <div className="col-md-6" >
                         <h1>
                            <p>Let's make this world a better place to live.</p>
                             <p>Together, WE CAN!</p>
                        </h1>
                    </div>
                    <div className="col-md-6" >
                        <h1>Create an easy Account</h1>
                        <h3>It's quick and easy!</h3>

                        <Form>
                            <FormControl
                                type="text"
                                placeholder="Full Name"
                                name="fullNameSignup"
                                value={this.state.fullNameSignup}
                                className="mr-sm-2 col-md-8 signup-form-input"
                                onChange={this.updateSignupForm}
                            />

                            <FormControl
                                type="email"
                                placeholder="email id"
                                name="emailSignup"
                                value={this.state.emailSignup}
                                className="mr-sm-2 col-md-8 signup-form-input"
                                onChange={this.updateSignupForm}
                            />

                            <FormControl
                                type="password"
                                placeholder="password"
                                name="passwordSignup"
                                value={this.state.passwordSignup}
                                className="mr-sm-2 col-md-8 signup-form-input"
                                onChange={this.updateSignupForm}
                            />

                            <FormGroup>
                                Gender:{"  "}
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="genderSignup"
                                id="male"
                                onClick={this.genderOnClick}
                                inline
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="genderSignup"
                                id="female"
                                onClick={this.genderOnClick} inline
                            />
                        </FormGroup>
                            <Button
                                variant="primary"
                                onClick={this.handleSignupBtn}
                            />
                        </Form>
                    </div>
                </div>
            </div>

        </div>)
    }
}

const mapStateToProps = state => ({
        // email: state.Cred.email,
        // token: state.Cred.token
    }
);

export default connect( mapStateToProps, {loginHandler})(HomePage);