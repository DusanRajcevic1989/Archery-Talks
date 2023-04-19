import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "../../components/Navigation";
import useSWR from "swr";
import ProjectForm from "../../components/ProjectForm";
import Card from "../../components/Card";
import List from "../../components/List";

export default function Home() {
  // const { data } = useSWR("api/projects", fetcher);
  // console.log("give me something", data);
  return (
    <>
      <main className={styles.main}>
        <Navigation />
        <List />
        {/* <ul>
          {data.map((project) => {
            return (
              <li key={project._id}>
                <Card
                  title={project.title}
                  image={project.image}
                  description={project.descrion}
                  blueprint={project.blueprint}
                  id={project._id}
                />
              </li>
            );
          })}
        </ul> */}
      </main>
    </>
  );
}
