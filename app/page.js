import { ExploreCard, Footer, Navbar } from '../components';
import Banner from '../components/Banner';
import CodeMain from '../components/CodeMain';
import Code_Main from '../components/Code_Main';
import CommunityPreview from '../components/CommunityPreview';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Banner />
    {/* <CodeMain /> */}
    <Code_Main />
    <CommunityPreview />
  </div>
);

export default Page;
