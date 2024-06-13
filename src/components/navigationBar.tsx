import Link from 'next/link'
import { Typography,Breadcrumbs } from '@mui/material';
import Button from '@mui/material/Button';
import styles from '../app/page.module.css'

const navigationBar = () => (
  // 头部
  <header className = {styles.mainHander}>
    {/* 头部中间元素定位 */}
    <div className = {styles.container}>
      <a className = {styles.log}>
        <img src="/vercel.svg"/>
      </a>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" >
                首页
            </Link>
            <Link color="inherit" href="/post/abc">
            标题1
            </Link>
            <Link color="inherit" href="/">
             标题1
            </Link>
            <Link color="inherit" href="/">
                标题1
            </Link>
            <Link color="inherit" href="/">
                标题1
            </Link>
            <Link color="inherit" href="/">
                标题1
            </Link>
        </Breadcrumbs>
      </div>
    </div>
    <ul>
        <li>
          <Link href="/post/abc">
            Go to pages/post/[pid].js
          </Link>
        </li>
        <li>
          <Link href="/post/abc?foo=bar">
            Also goes to pages/post/[pid].js
          </Link>
        </li>
        <li>
          <Link href="/post/abc/a-comment">
            Go to pages/post/[pid]/[comment].js
          </Link>
        </li>
        <li>
          <Link
            href="/post/[...slug]"
            as="/post/2020/first-post/with/catch/all/routes"
          >
            First Post/12
          </Link>
        </li>
        <li>
          <Link
            href="/post/[...slug]"
            as="/post/2020/second-post/with/catch/all/routes"
          >
            Second Post/123
          </Link>
        </li>
      </ul>
  </header>
)

export default navigationBar