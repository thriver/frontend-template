import { createBrowserRouter } from 'react-router-dom'
import Main from './pages/UserList/UserList'
import ChatList from './pages/ChatList/ChatList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'chats/:userId',
        element: <ChatList />
      }
    ]
  }
])

export default router
