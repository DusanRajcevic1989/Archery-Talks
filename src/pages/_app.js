import "@/styles/globals.css";
import Layout from "../../components/Layout";
import { SWRConfig } from "swr";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }) {
  const [search, setSearch] = useState("");
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      <SessionProvider>
        <Layout search={search} setSearch={setSearch}>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </SWRConfig>
  );
}
