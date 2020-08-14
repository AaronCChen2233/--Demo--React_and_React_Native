/**The App component is the top-level component which will be common accross all different apges. You can use this App Component to keep state when navigating between pages. */
import '../styles/global.css'

export default function App({Component, pageProps}){
    return <Component{...pageProps}/>
}