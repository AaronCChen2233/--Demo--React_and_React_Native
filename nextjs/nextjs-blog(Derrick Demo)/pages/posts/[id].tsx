import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  )
}

// 1. a react component to render this page
// 2. getStaticPaths which returns an array of possible routes (values for id)
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}
// 3. getStaticProps which fetches necessary data for the post with id
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
