import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>&nbsp;</p>
        <p>CLOUDTYPE{' '}</p>
        <p>DEVELOPER{' '}</p>
        <p>&nbsp;</p>
        <p>
          {' '}
          <a href="https://cloudtype.io/">&#9889; Notion</a>
        </p>
        <p>
          {' '}
          <a href="https://cloudtype.io/">&#128640; Github</a>
        </p>
        <p>  
          {' '}
          <a href="https://cloudtype.io/">&#128293; Linkedin</a>
        </p>
      </section>
    </Layout>
  )
}
