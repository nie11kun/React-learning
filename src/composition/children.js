const React = require('react')
const ReactDOM = require('react-dom')

const FancyBorder = props => {
    return (
        <div className={`FancyBorder FancyBorder-${props.color}`}>
            {props.children}
        </div>
    );
}

const WelcomeDialog = () => {
    return (
        <FancyBorder color='red'>
            <h1 className='Dialog-title'>Welcome</h1>
            <p className='Dialog-message'>
                thank you for check this page.
            </p>
        </FancyBorder>
    )
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
);