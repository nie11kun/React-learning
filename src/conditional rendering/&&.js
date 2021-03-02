const InlineCom = (props) => {
    return(
        <div>
            <h1>hello world</h1>
            {props.count > 10 &&
                <h2>count is: {props.count}</h2>
            }
        </div>
    );
}

ReactDOM.render(
    <InlineCom count={20} />,
    document.getElementById('root')
);