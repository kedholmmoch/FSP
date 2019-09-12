import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
            .then(() => this.props.closeModal())
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <h5 key={`error-${idx}`}>
                        {error}
                    </h5>
                ))}
            </ul>
        );
    }

    loginDemoUser(e) {
        e.preventDefault();
        const demoUser = {
            username: 'UserDemo',
            password: 'password'
        };
        this.props.loginUser(demoUser)
            .then(() => this.props.closeModal())
    };


    render() {
        
        const formMessage = this.props.formType;

        const welcomeMessage = (formMessage === 'Sign up') ?
            'Join Materia.' : 
            'Welcome back.' ;

        const otherLink = (formMessage === 'Sign up') ?
            <span> Already have an account?
                &nbsp;&nbsp;
                <button className="other-session-link"
                        onClick={() => this.props.openModal('Sign in')}>
                    Sign in
                </button>
            </span>
                :
            <span> No account?
                &nbsp;&nbsp;
                <button className="other-session-link"
                        onClick={() => this.props.openModal('Sign up')}>
                    Create one
                </button>
            </span>
                ;

        return (
            <div className="session-form-container">
                <section className="session-content">
                    <div onClick={this.props.closeModal} className="close-x">
                        <i id="session-close-x" className="fa fa-times"></i>
                    </div>
                    <h1 id="session-welcome-msg">{welcomeMessage}</h1>
                    <h2 id="session-welcome-para">{formMessage} to find great essays, share your voice, and keept up with authors and topics that you love.</h2>
                    <div className="session-errors">{this.renderErrors()}</div>
                    <div className="session-form-box"><form onSubmit={this.handleSubmit} >
                        <h2 className="session-label">Username</h2>
                        <input type="text" 
                            value={this.state.username} 
                            onChange={this.handleChange('username')}
                            className="session-input"
                        />
                        <h2 className="session-label">Password</h2>
                        <input type="password" 
                            value={this.state.password} 
                            onChange={this.handleChange('password')}
                            className="session-input"
                        />
                        <div className="session-submit">
                            <input type="submit" value={formMessage}/>
                        </div>
                    </form></div>
                    <div className="session-form-links">
                        {otherLink}
                    </div>
                    <div className="demo-button">
                        <button onClick={this.loginDemoUser}>Demo Login</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default SessionForm;