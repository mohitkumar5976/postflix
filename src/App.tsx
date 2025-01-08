import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/webComponents/utils/Loader";

const Home = lazy(() => import("./pages/Home"));
const Reels = lazy(() => import("./pages/Reels"));
const Profile = lazy(() => import("./pages/Profile"));
const Chat = lazy(() => import("./pages/Chat"));
const ChatRoom = lazy(() => import("./components/webComponents/chat/ChatRoom"));
const UserSearch = lazy(() => import("./pages/UserSearch"));
const Notification = lazy(() => import("./pages/Notification"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/search" element={<UserSearch />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
