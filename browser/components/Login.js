import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }

    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  render() {
    const { message } = this.props;
    return (
      <div className="signin-container">
        <div className="buffer local">
            <form onSubmit={this.onLoginSubmit}>
                <div className="form-group">
                  <label>email</label>
                  <input
                    onChange={this.handleEmailInput}
                    name="email"
                    type="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                    <label>password</label>
                    <input
                      onChange={this.handlePasswordInput}
                      name="password"
                      type="password"
                      className="form-control"
                      required
                    />
                </div>
                <button type="submit" className="btn btn-block btn-primary">{message}</button>
            </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a target="_self"
               href="/auth/google"
               className="btn btn-social btn-google">
            <i className="fa fa-google"></i>
            <span>{message} with Google</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

  handleEmailInput(event) {
    const email = event.target.email.value;
    this.setState({email});
  }

  handlePasswordInput(event) {
    const password = event.target.password.value;
    this.setState({password});
  }

  onLoginSubmit(event) {
    const { message } = this.props;
    event.preventDefault();
    return

  //   console.log(`${message} isn't implemented yet`);
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({ message: 'Log in' })
const mapDispatch = (dispatch) => ({  })

export default connect(mapState, mapDispatch)(Login);
