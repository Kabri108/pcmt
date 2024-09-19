
import Layout from '../Layout/Layout'
import Banner from '../Components/Home/Banner'
import HomeSection from '../Components/Home/HomeSection'


function HomeScreen() {

  return (
    <Layout>
      <div className="mx-auto min-h-screen">
        <Banner/>
        <HomeSection/>
      </div>
    </Layout>
  )
}


export default HomeScreen;
