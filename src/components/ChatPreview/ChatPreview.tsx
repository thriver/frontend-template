import { gql } from '@apollo/client'
import { ChatPreviewFragment } from '../../generated/graphql'

gql`
  fragment ChatPreview on Chat {
    name
    description
  }
`

const ChatPreview: React.FC<{ chat: ChatPreviewFragment }> = ({ chat }) => {
  return (
    <li>
      {chat.name} - {chat.description}
    </li>
  )
}

export default ChatPreview
