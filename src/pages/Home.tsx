import BottomTabs from "../components/mobileComponents/BottomTabs/BottomTabs";
import Header from "../components/webComponents/Header/Header";
import PostList from "../components/webComponents/Post/PostList";
// import Header from "../components/webComponents/Header/Header";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div style={{ paddingBottom: "50px" }}>
        <PostList />
      </div>
      <BottomTabs />
    </div>
  );
};

export default Home;
