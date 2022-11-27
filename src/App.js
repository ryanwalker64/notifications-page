import './App.css';
import {useState} from 'react'
import NotificationsList from './components/NotificationsList';
import Header from './components/Header';

const db = [
  {
   "id": 0,
   "date": "Mon Nov 28 2022 08:13:15 GMT+1300 (New Zealand Daylight Time)",
   "status": "unread",
   "notif-by": {
      "username": "Rayn Ong",
      "profile-url": "test.com",
      "profile-pic": "./src/profilepic.jpeg"
      },
   "context": {
      "action": "reacted to your recent post",
      "linked post": {
          "name": "My first tournament",
          "link": "test.com"
          }
      }
  },
  {
      "id": 1,
      "date": "Mon Nov 28 2022 08:17:15 GMT+1300 (New Zealand Daylight Time)",
      "status": "unread",
      "notif-by": {
         "username": "Jane Webber",
         "profile-url": "test.com",
         "profile-pic": "test.com"
         },
      "context": {
         "action": "followed you"
         }
     },
     {
      "id": 2,
      "date": "Mon Nov 26 2022 08:20:15 GMT+1300 (New Zealand Daylight Time)",
      "status": "read",
      "notif-by": {
         "username": "Mark Webber",
         "profile-url": "test.com",
         "profile-pic": "test.com"
         },
      "context": {
         "action": "has joined your group",
         "group": {
             "name": "Chess Club",
             "link": "test.com"
             }
         }
     },
     {
      "id": 3,
      "date": "Mon Nov 25 2022 08:30:15 GMT+1300 (New Zealand Daylight Time)",
      "status": "read",
      "notif-by": {
         "username": "Laura Kerrison",
         "profile-url": "test.com",
         "profile-pic": "test.com"
         },
      "context": {
         "action": "sent you a private message",
         "message": "Hello, thank you setting up the chess club, I can't wait to attend the next meeting, yahoooo!!"
         }
     }
     
]


function App() {
  const [notifications, setNotifications] = useState(db)

  function countUnreadNotifications() {
    return notifications.filter(notif => notif.status === 'unread').length
  }

  function markAllAsRead() {
    const updateNotifications = notifications.map(notif => {
      if(notif.status === 'unread') notif.status = 'read'
      return notif
    })
    setNotifications(updateNotifications)
  }

  //ALT Click to unread
  //mobile sizing
  //add notifications?
  //delete notifications
  //hookup back-end
  //host on render
  //setup mongo

  return (
    <div className="App">
      <div className="container">
        <Header notification-count={countUnreadNotifications()} markAllAsRead={markAllAsRead}/>
        <NotificationsList notifications={notifications}/>
      </div>
    </div>
  );
}

export default App;
