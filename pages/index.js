import { Inter } from "next/font/google";
import Pagination from "./Components/Pagination";
import Pagination2 from "./Components/Pagination2";
import Pagination3 from "./Components/Pagination3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Page6 from "./Components/Page6";
import Page7 from "./Components/Page7";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <Pagination/>
     <Pagination2/>
     <Pagination3/>
     <Page4/>
     <Page5/>
     <Page6/>
     <Page7/>
    </>

  );
}
