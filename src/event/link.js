const React = require('react')
const ReactDOM = require('react-dom')

class Link extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        console.log('clicked me');
    }
    render() {
        return (
            <a href='#' onClick={this.handleClick}>click me</a>
        )
    }
}

ReactDOM.render(
    <Link />,
    document.getElementById('root')
);
