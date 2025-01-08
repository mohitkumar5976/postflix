import ReelCard from "./ReelCard";

const ReelList = () => {
  return (
    <ul
      id="reels-scrollbar"
      className="flex flex-col items-center max-h-screen overflow-y-scroll pb-8"
    >
      <li className="bg-red-200 w-full">
        <ReelCard />
      </li>
      <li>
        <ReelCard />
      </li>
      <li>
        <ReelCard />
      </li>
    </ul>
  );
};

export default ReelList;
