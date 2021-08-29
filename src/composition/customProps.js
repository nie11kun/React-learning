const React = require('react')
const ReactDOM = require('react-dom')

const SplitPane = (props) => {
    return (
        <div className='SplitPane'>
            <div className='Splitpane-left'>
                {props.left}
            </div>
            <div className='Splitpane-right'>
                {props.right}
            </div>
        </div>
    )
}

const Contacts = () => {
    return (
        <div>
            <h1>marco</h1>
        </div>
    )
}

const Chat = () => {
    return (
        <div>
            <p>this is a test</p>
        </div>
    )
}

const App = () => {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            }
        />
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);