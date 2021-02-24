import Layout from '../layouts/index.js'

import { TitleMd } from '../components/typography'


const Home = () => {
  return (
    <div>
        <Layout title="Home">
          <TitleMd as="h1">Hello there</TitleMd>
          <div>Child</div>
        </Layout>
    </div>
  )
}

export default Home
