export default function Header(props) {
    const notificationCount = props['notification-count']
  
    return (
      <header>
            <div className="heading-container">
              <h1 className="page-heading">Notifications</h1>
              {notificationCount > 0 ? <span className="notification-count">{notificationCount}</span> : ''}
            </div>
            <p className="read-all-btn" onClick={() => props.markAllAsRead()}>Mark all as read</p>
          </header>
    )
  }