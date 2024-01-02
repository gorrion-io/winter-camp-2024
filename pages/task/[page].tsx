/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import Pagination from "../../components/Pagination";
import { CrewMember } from "@/lib/models";
import { useFetch } from "../../context/FetchProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Task() {
  const { data } = useFetch();

  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.gridContainer}>
          {data.elements.map((member: CrewMember, index: number) => (
            <ul className={`${styles.gridItem} ${inter.className}`} key={index}>
              <li>
                Full Name: <b>{member.fullName}</b>
              </li>
              <li>Nationality: {member.nationality}</li>
              <li>
                Age: <b>{member.age}</b>
              </li>
              <li>Profession: {member.profession}</li>
            </ul>
          ))}
        </div>
        <Pagination />
        <div className={styles.linkMainPage}>
          <Link href="/">Go to main page</Link>
        </div>
      </main>
    </>
  );
}
