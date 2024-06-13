import { useRouter } from 'next/router'
import NavigationBar from '../../components/navigationBar'

const Post = () => {
  const router = useRouter()
  console.log("我是router" + JSON.stringify(router))
  const { pid } = router.query

  return (
    // <NavigationBar/>
    <p>Post: {pid}</p>
  )
}

export default Post