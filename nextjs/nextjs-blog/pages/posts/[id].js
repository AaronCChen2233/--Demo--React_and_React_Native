import layout from '../../components/layout'
import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Date from '../../components/date'

export default function Post(postData){

    return (<Layout>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        </article>
        {postData.title}
        <br></br>
        {postData.id}
        <br></br>
        <Date dateString ={postData.date}></Date>
    </Layout>)
}

/**1. a react component to render this page 
 * 2. getStaticPaths which returns an array of possible routes (values for id)
 * 3. getStaticProps which fetches necessary data for the post with id
*/

export async function getStaticPaths(){
    const paths = await getAllPostIds()
    return{
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}){
    const postData = await getPostData(params.id)
    return {
        props:{
            postData,
        },
    }
}
