import { createBrowserRouter } from 'react-router-dom'
import Main from './pages/Main/Main'
import ChatList from './pages/ChatList/ChatList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/chats/:userId',
    element: <ChatList />
  }
])

export default router
