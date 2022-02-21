import React from "react";
import Header from "./assets/components/header"
import MetagenMetawear from "./assets/components/metagen"
import KidsHang from "./assets/components/hangs"
import RoadMap from "./assets/components/roadmap"
import Metatech from "./assets/components/metatech"
import Genitors from "./assets/components/genitors"
import FaqItem from "./assets/components/faq"
import Footer from "./assets/components/footer"
import BigImg from "../src/assets/img/hero.png"


function App() {
  return (
    <>
      <Header />
      <MetagenMetawear />
      <KidsHang />
      <RoadMap />
      <Metatech />
      <Genitors />
      <FaqItem />
      <Footer />
    </>
  );
}

export default App;
