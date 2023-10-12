import UserPreview from '../../components/UserPreview/UserPreview'
import './UserList.css'

gql`
  query Users {
    id
    ...UserPreview
  }
`

const UserList: React.FC = () => {
  const { data, loading } = useUsersQuery()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {/* key={user.id} is how React keeps track of rendered elements as the data set changes, so it can deduplicate */}
        {/* identical content on re-renders. */}
        {data?.users.map((user) => <UserPreview key={user.id} user={user} />)}
      </ul>
    </div>
  )
}

export default UserList
