import Chat from './components/chat'
import UserList from './components/user-list'

function Home() {
  return (
    <main className="flex">
      <Chat />
      <UserList />
    </main>
  )
}

export default Home
