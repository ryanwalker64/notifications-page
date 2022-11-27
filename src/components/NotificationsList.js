import Notification from "./Notification"

export default function NotificationsList(props) {
    const notifications = props.notifications.map(notif => <Notification notif={notif} key={notif.id}/>)
  
    return (
      <div className="notification-list">
          {notifications}
      </div>
    )
  }