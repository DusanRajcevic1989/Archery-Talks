import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "../../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navigation />
        <h1>Halooooo</h1>
      </main>
    </>
  );
}
