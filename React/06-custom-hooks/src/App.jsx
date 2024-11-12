import usePost from "./hooks/useFetch"

function App() {

  const post = usePost();

  return (
    <>
      {post.title}     
    </>
  )
}

export default App
