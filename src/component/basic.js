const React = require('react')
const ReactDOM = require('react-dom')

/*
class Welcome extends React.Component {
    render() {
        return <h1>hello, {this.props.name}</h1>
    }
}
*/

const Welcome = (props) => {
    return <h1> hello, {props.name}</h1>;
}

const App = () => {
    return (
        <div>
            <Welcome name='marco' />
            <Welcome name='tim' />
            <Welcome name='jone' />
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
