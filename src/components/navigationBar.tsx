import Link from 'next/link'
import { Breadcrumbs } from '@mui/material';
// import Button from '@mui/material/Button';
import styles from '../app/page.module.css';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function navigationBar() {
  return (
    <header className={styles.mainHander}>
      {/* 头部中间元素定位 */}
      <div className={styles.container}>
        <a className={styles.log}>
          <img src="/vercel.svg" />
        </a>
        <div>
          <Button variant="contained">Hello world</Button>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              首页
            </Link>
            <Link color="inherit" href="/post/abc">
              标题1
            </Link>
            <Link color="inherit" href="/about">
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
  );
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function navigationBara () {
  return (<AppBar component="nav">
  <Toolbar>
  <div className={styles.container}>
        <a className={styles.log}>
          <img src="/vercel.svg" />
        </a>
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              首页
            </Link>
            <Link color="inherit" href="/post/abc">
              标题1
            </Link>
            <Link color="inherit" href="/about">
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
  </Toolbar>
</AppBar>)
}