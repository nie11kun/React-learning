const React = require('react')
const ReactDOM = require('react-dom')

const UserGreeting = (props) => {
    return <h1>welcome back</h1>
}

const GuestGreeting = (props) => {
    return <h1>please sign up</h1>
}

const LoginButton = (props) => {
    return (
        <button onClick={props.onClick}>
            login
        </button>
    );
}

const LogoutButton = (props) => {
    return (
        <button onClick={props.onClick}>
            logout
        </button>
    );
}

const Greeting = (props) => {
    let isLoggedIn = props.isLoggedIn;
    if (isLoggedIn)
        return <UserGreeting />;
    else
        return <GuestGreeting />;
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        let button;
        
        if (isLoggedIn)
            button = <LogoutButton onClick={this.handleLogoutClick} />
        else
            button = <LoginButton onClick={this.handleLoginClick} />
        
        return (
            <div>
                the user is <b>{isLoggedIn ? 'currenty' : 'not'}</b> logged in.
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }

}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);