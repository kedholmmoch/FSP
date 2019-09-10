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

    render() {
        
        const formMessage = this.props.formType;

        const welcomeMessage = (formMessage === 'Sign up') ?
            'Join Materia.' : 
            'Welcome back.' ;

        const otherLink = (formMessage === 'Sign up') ?
            <span> Already have an account?
                &nbsp;&nbsp;
                <button onClick={() => this.props.openModal('Sign in')}>
                    Sign in
                </button>
            </span>
                :
            <span> No account?
                &nbsp;&nbsp;
                <button onClick={() => this.props.openModal('Sign up')}>
                    Create one
                </button>
            </span>
                ;

            // <span> Already have an account?
            //     &nbsp;&nbsp;
            //     <Link to="/login">Sign in</Link>
            // </span>
            //     :
            // <span> No account?
            //     &nbsp;&nbsp;
            //     <Link to="/signup">Sign up</Link>
            // </span>
            //     ;

        return (
            <div className="session-form-container">
                <section className="session-content">
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <h1 id="session-welcome-msg">{welcomeMessage}</h1>
                    <h2 id="session-welcome-para">{formMessage} to find great essays, share your voice, and follow authors and topics that you love.</h2>
                    <div className="session-errors">{this.renderErrors()}</div>
                    <div className="session-form-box"><form onSubmit={this.handleSubmit} >
                        <label>Username &nbsp;&nbsp;
                            <input type="text" 
                                value={this.state.username} 
                                onChange={this.handleChange('username')}
                                className="session-input"
                            />
                        </label>
                        <br/><br/>
                        <label>Password &nbsp;&nbsp;
                            <input type="password" 
                                value={this.state.password} 
                                onChange={this.handleChange('password')}
                                className="session-input"
                            />
                        </label>
                        <br/><br/>
                        <input type="submit" value={formMessage}/>
                    </form></div>
                    <div className="session-form-links">
                        {otherLink}
                    </div>
                </section>
            </div>
        );
    }
}

export default SessionForm;