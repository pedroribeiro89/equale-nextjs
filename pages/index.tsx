import Head from 'next/head'
import Layout from '../components/layout'
import indexStyle from '../styles/index.module.scss'
import fetch from 'node-fetch'
import {GetServerSideProps} from "next";
import {HEAD_CONFIG} from "../components/head-config";
import StudentCard from "../components/student/student-card";
import {Student} from "../models/student";

export default function Home({ students }) {
    return (
      <Layout>
          <Head>
              <title>{HEAD_CONFIG.title}</title>
          </Head>
          <article className={indexStyle.about}>
              <h1>Sobre o Instituto Equale:</h1>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </article>
          <article className={indexStyle.goals}>
              <h1>Nossa Meta</h1>
              <p> <strong>R$ 54678,80</strong> de <strong>R$ 100000,00</strong> </p>
          </article>
          <article className={indexStyle.students}>
              <h1>Conheça nossos alunos:</h1>
              <div>
                  {students.map((student: Student) => (<StudentCard student={student} key={student.id}/>))}
              </div>
          </article>
      </Layout>
  );
}

export async function listStudents() {
    const res = await fetch(process.env.BASE_URL + '/students');
    return await res.json();
}

export const getServerSideProps: GetServerSideProps = async context => {
    let students = await listStudents();
    return {
        props: {
            students
        }
    };
};
