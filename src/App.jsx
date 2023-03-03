import { Header } from "./Components/Header"
import { Post } from "./Post"

export function App() {
 
  return (
    <div>
      <Header/>
      
      <Post 
        author="Allen Halsay"
        content="Aluno da RocketSeat"
      />
      <Post 
        author="Ian Allen"
        content="Aluno da RocketSeat"
      />
    </div>
  )
}
