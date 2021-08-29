const React = require('react')
const ReactDOM = require('react-dom')

const FancyBorder = props => {
    return (
        <div className={`FancyBorder FancyBorder-${props.color}`}>
            {props.children}
        </div>
    );
}

const Dialog = props => {
    return (
        <FancyBorder color='red'>
            <h1 className='Dialog-title'>
                {props.title}
            </h1>
            <p className='Dialog-message'>
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangle = this.handleChangle.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.state = {login: ''};
    }

    handleChangle(e) {
        this.setState({login: e.target.value});
    }

    handleSignup() {
        alert(`welcome guys, ${this.state.login}`)
    }

    render () {
        return (
            <Dialog
                title='Sport game'
                message='welcome to this game'
            >
                <input value={this.state.login} onChange={this.handleChangle} />
                <button onClick={this.handleSignup}>Sign me up</button>
            </Dialog>
        )
    }
}

ReactDOM.render(
    <SignUpDialog />,
    document.getElementById('root')
);