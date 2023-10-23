import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { CreateContainer, Header, MainContainer } from "./components/Index";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { actionType } from "./context/reducer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Aboutus from "./components/AboutUs";

function App() {
  const [{}, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
      console.log(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegistrationPage = location.pathname === "/registration";

  return (
    <>
      <AnimatePresence>
        <div className="w-screen h-auto flex flex-col bg-primary">
          {/* <Header /> */}
          {!isLoginPage && !isRegistrationPage && <Header />}
          <main>
            {!isLoginPage && !isRegistrationPage && (
              <div className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
                <Routes>
                  <Route path="/*" element={<MainContainer />} />
                  <Route path="/createItem" element={<CreateContainer />} />
                  <Route path="/aboutus" element={<Aboutus />} />
                </Routes>
              </div>
            )}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </main>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
