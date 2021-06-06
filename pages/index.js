import Image from "next/image";
import HeadComp from "../components/Head";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HeadComp />
      <Header />
    </>
  );
}
