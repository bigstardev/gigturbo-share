import HeadTitle from '../components/HeadTitle';
import Search from '../components/Search';
import Nav from '../components/Nav';
import PlatformLists from '../components/PlatformLists';
import ExploreGigs from '../components/ExploreGigs';
export default function Home() {

  return (
    <>
      <Nav />
      <HeadTitle />
      <Search />
      <PlatformLists />
      <ExploreGigs />

    </>
  )
}
