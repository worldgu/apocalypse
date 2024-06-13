
import styles from './page.module.css'
import { CssBaseline} from '@mui/material'
import {Container} from '@mui/material'
import {Typography} from '@mui/material'
import {ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material'
import NavigationBar from '../components/navigationBar'
import Head from 'next/head'
// import {selfTheme} from '../styles/selfTheme'
import SimpleSlider from '@/pages/simpleSlider'
// import ClientRenderComponent from '@/pages/ClientRenderComponent'


export default function Home() {
 
  return (
    <>
    <div className={styles.content}>
    <Head>
        <title>Core Web Vitals</title>
        <meta name="description" content="Core web vitals walk through" />
        <link rel="icon" href="/favicon.ico" /> 
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
        asdads
      </Head>
    {/* 全局样式 */}
    <CssBaseline />
    {/* 导航栏 */}
    <NavigationBar/>
    {/* 轮播图 */}
    <SimpleSlider/>
    {/* 文章列表 */}
    {/* Food */}
    {/* <SimpleSlider/> */}
    {/* <ClientRenderComponent/> */}
    <main className={styles.main}>
      <Container maxWidth="xl">
        <Typography component="div" style={{ backgroundColor: '#fff', height: '100vh',border: '1px solid grey' }} />
      </Container>
    </main>
    </div>
    </>
  
    
    // <main className={styles.main}>
    //   <Head>
    //     <title>Core Web Vitals</title>
    //     <meta name="description" content="Core web vitals walk through" />
    //     <link rel="icon" href="/favicon.ico" /> 
    //     <link
    //       href="https://fonts.googleapis.com/css2?family=Inter"
    //       rel="stylesheet"
    //     />
    //     asdads
    //   </Head>
    //   
    //   <div className={styles.description}>
      
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.tsx</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.111121212</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!12222</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore the Next.js 13 playground.2222122</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy222 <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.44442121212313231
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
