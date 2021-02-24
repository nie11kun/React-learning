function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.user} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const Avatar = (props) => {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

const UserInfo = (props) => {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}