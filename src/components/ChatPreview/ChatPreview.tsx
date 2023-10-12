import { gql } from '@apollo/client'
import { ChatPreviewFragment } from '../../generated/graphql'

gql`
  fragment ChatPreview on Chat {
    name
    description
  }
`

interface Props {
  chat: ChatPreviewFragment
}

const ChatPreview: React.FC<Props> = ({ chat }) => {
  return (
    <li>
      {chat.name} - {chat.description}
    </li>
  )
}

export default ChatPreview
