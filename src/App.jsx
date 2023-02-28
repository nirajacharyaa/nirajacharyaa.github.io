import { createContext, useState } from "react";
import { images } from "./constants/images";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Works from "./pages/Works";
import Music from "./pages/Contact";
import Blogs from "./pages/Blogs";

export const IndexContext = createContext({
  imageIndex: Number,
  activeIndex: Number,
});
export const SetIndexContext = createContext({
  setActiveIndex: () => {},
  setImageIndex: () => {},
});
function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <IndexContext.Provider value={{ imageIndex, activeIndex }}>
      <SetIndexContext.Provider value={{ setActiveIndex, setImageIndex }}>
        <div className="bg-primaryBlack text-white flex flex-col max-w-4xl mx-auto transition-all duration-500">
          <img src={images[imageIndex]} className="md:mt-20" />
          <div className="-mt-24 md:-mt-40 max-w-3xl px-10 sm:px-32 flex flex-col gap-10">
            <div className="font-gothamb text-2xl  leading-none">
              tech
              <br />
              design
              <br />
              development.
              <br />
            </div>
            <Navbar />
            <div>
              {activeIndex == 1 && <About />}
              {activeIndex == 2 && <Works />}
              {activeIndex == 3 && <Blogs />}
              {activeIndex == 4 && <Music />}
            </div>
            <footer className="text-xs text-gray-600 my-10 flex items-center select-none">
              <div className="pr-2">✨</div>
              <div>
                built with react and tailwind css. posters designed in
                photoshop.
              </div>
            </footer>
          </div>
        </div>
      </SetIndexContext.Provider>
    </IndexContext.Provider>
  );
}

export default App;
