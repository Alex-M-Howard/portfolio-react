import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Resume from '@/components/Resume'
import Profile from '@/components/Profile'
import NavBar from '@/components/NavBar'
import ToolBar from '@mui/material/Toolbar'

import Grid from '@mui/material/Grid'
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Howard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          sx={{px: 5}}
        >

          <Grid item xs={12}>
        <Element name="Top">
        <ToolBar />
        <ToolBar />

            <Profile />
        </Element>
          </Grid>

          <Grid item  xs={8}>
        <Element name="About">
          <ToolBar />
          <About />
        </Element>
            </Grid>
          <Grid item xs={12}>
        <Element name="Projects">
          <ToolBar />
          <Projects />
        </Element>
            </Grid>
          <Grid item xs={12}>
        <Element name="Resume">
          <ToolBar />
          {/*<Resume />*/}
        </Element>
            </Grid>
          <Grid item xs={12}>
        <Element name="Contact">
          <ToolBar />
          <Contact />
        </Element>
            </Grid>
        </Grid>
    </>
  )
}
