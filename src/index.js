const React = require('react')
const ReactDOM = require('react-dom')

const WarningBanner = (props) => {
    if (!props.warn) {
        return null;
    }
    return (
        <div className='warning'>
            warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handelToggleClick = this.handelToggleClick.bind(this);
    }
    handelToggleClick() {
        this.setState({ showWarning: !this.state.showWarning });
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handelToggleClick}>
                    {this.state.showWarning ? 'hide' : 'show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);