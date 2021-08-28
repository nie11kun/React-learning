const React = require('react')
const ReactDOM = require('react-dom')

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'sports'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert(`you favorite is: ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    your favorite:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="sleep">Sleep</option>
                        <option value="sports">Sports</option>
                        <option value="takePhoto">Take Photo</option>
                        <option value="work">Work</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);