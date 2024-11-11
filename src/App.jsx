import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Layout from "./routes/layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} /> {/* Default route */}
          <Route path='/list' element={<ListPage />} />
          <Route path='/:id' element={<SinglePage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
