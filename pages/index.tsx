import { Separator, Theme } from "@radix-ui/themes";
import Filters from "../src/components/Filters";
import Header from "../src/components/Header";
import Catalog from "../src/components/Catalog";
import { FilterProvider } from "../src/FilterContext";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Prague Labs</title>
        <meta name="description" content="Nabídka karavanů" />
      </Head>
      <Theme>
        <Header />
        <Separator orientation="horizontal" size="4" />
        <main>
          <FilterProvider>
            <Filters />
            <Separator size={"4"} />
            <Catalog />
          </FilterProvider>
        </main>
      </Theme>
    </>
  )
}


export default Home
