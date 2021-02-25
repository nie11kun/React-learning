const React = require('react')
const ReactDOM = require('react-dom')

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        //this.handleClick = this.handleClick.bind(this);
    }
    handleClick(a, e) {
        this.setState({ isToggleOn: !this.state.isToggleOn });
        console.log(e._reactName);
        console.log(a);
    }
    render() {
        return (<button onClick={this.handleClick.bind(this, 'aaa')} > { this.state.isToggleOn ? 'ON' : 'OFF'} </button>);
    }
}

ReactDOM.render(<
    Toggle />,
    document.getElementById('root')
);