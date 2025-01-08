import BottomTabs from "../components/mobileComponents/BottomTabs/BottomTabs";
import Header from "../components/webComponents/Header/Header";
import ReelList from "../components/webComponents/Reels/ReelList";

const Reels = () => {
  return (
    <>
      {/* // <div className="flex justify-center items-start pt-2 gap-2  min-h-screen bg-gray-200">
    //   <div className="w-1/5">
    //     <LeftSidebar />
    //   </div>
    //   <div className="w-2/5">
    //     <Reels />
    //   </div>
    //   <div className="md:w-1/5">
    //     <RightSidebar />
    //   </div>
    // </div> */}
      <Header />
      <ReelList />
      <BottomTabs/>
    </>
  );
};

export default Reels;
