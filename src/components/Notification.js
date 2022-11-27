import profilepic from '../profilepic.jpeg'

export default function Notification({notif}) {

const privateMessage = notif.context.message
    ? <div className="notification-private-message">
        <p className="notification-msg">{notif.context.message}</p>
    </div>
    : ''

return (
    <div className="notification-container" data-status={notif.status}>
    <img src={profilepic} alt="profilepic" className="profile-pic"></img>
    <div className="notification-context">
        <p className="notification-msg"><strong>{notif['notif-by'].username}</strong> {notif.context.action} <strong>{notif.context.group ? notif.context.group.name : ''}</strong></p>
        <p className="notification-date">1m ago</p>
        {privateMessage}
    </div>
    </div>
)
}