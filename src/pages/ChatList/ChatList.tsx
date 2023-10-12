import { gql } from '@apollo/client'
import { useChatsQuery } from '../../generated/graphql'
import ChatPreview from '../../components/ChatPreview/ChatPreview'
import { useParams } from 'react-router-dom'

gql`
  query Chats($userId: ID!) {
    chats(userId: $userId) {
      id
      ...ChatPreview
    }
  }
`

const ChatList: React.FC = () => {
  // Get the user ID from path parameters
  const { userId } = useParams()

  // We need to skip the query if the userId is not defined yet,
  // but calling React hooks conditionally is not allowed.
  const { data, loading } = useChatsQuery({
    variables: {
      userId: userId!
    },
    skip: !userId
  })

  if (!userId) {
    return <div>No user selected</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Chats</h1>
      <ul>
        {data?.chats.map((chat) => <ChatPreview key={chat.id} chat={chat} />)}
      </ul>
    </div>
  )
}

export default ChatList
