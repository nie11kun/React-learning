const React = require('react')
const ReactDOM = require('react-dom')

function FormattedDate(props) {
    return (
        <h2>it is: {props.date.toLocaleTimeString()}</h2>
    )
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                <h1>hello world</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
