import { useRouter } from 'next/router'

const Post1 = () => {
  const router = useRouter()
  console.log(router)
  const { comment } = router.query

  return <p>Post1: {comment}</p>
}

export default Post1