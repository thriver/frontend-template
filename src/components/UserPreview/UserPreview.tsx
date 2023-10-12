import { gql } from '@apollo/client'
import { UserPreviewFragment } from '../../generated/graphql'
import { Link } from 'react-router-dom'

gql`
  fragment UserPreview on User {
    # It's okay to duplicate the id field here, because Apollo Client will deduplicate
    # identical fields in the cache.
    id
    name
  }
`

interface Props {
  user: UserPreviewFragment
}

const UserPreview: React.FC<Props> = ({ user }) => {
  return (
    <li>
      {/* Client-side routing: triggers an in-page rerender rather than a browser-level navigation to the new page */}
      <Link to={`chats/${user.id}`}>{user.name}</Link>
    </li>
  )
}

export default UserPreview
