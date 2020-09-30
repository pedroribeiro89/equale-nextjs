import Head from 'next/head'
import Layout from '../components/layout'
import indexStyle from '../styles/index.module.scss'
import fetch from 'node-fetch'
import Link from 'next/link'
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
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('http://localhost:3000/students');
    return await res.json();
}

export const getServerSideProps: GetServerSideProps = async context => {
    let students = await listStudents();
    console.log(students);

    // students = [
    //     { id: 1,
    //     name: 'aluno 1',
    //     email: 'aluno1@equale.com',
    //     type: 2,
    //     photo:
    //         'https://www.meioemensagem.com.br/wp-content/uploads/2019/05/CHARLINHO_QuiosqueMcFritas.jpg',
    //     video: 'https://www.youtube.com/embed/B6Vyhtvpp4k',
    //     description: 'aluno 1 desc',
    //     phone: '11111111',
    //     cep: 11111111,
    //     street: 'rua aluno 1',
    //     streetNumber: 111,
    //     addressComplement: 'compl aluno 1 ',
    //     city: 'cidade aluno 1',
    //     state: 'AL',
    //     password:
    //         '$2b$10$JePa5v5aYEwIFYjrcWhWPewRD8mBV2RnA.bQgsF5sNpcwDzmAfh7q',
    //     createdAt: '2020-06-14T13:42:32.000Z',
    //     updatedAt: '2020-06-14T13:43:15.000Z',
    //     CourseId: 1 },
    //     { id: 2,
    //         name: 'aluno 1',
    //         email: 'aluno1@email.com',
    //         type: 2,
    //         photo:
    //             'https://nova-escola-producao.s3.amazonaws.com/fme9Nu3B2KpXWDFqnUn88JYJUWx2sUCFyZGBBvy9jAHxabd55BsW76mDT5av/atencao-alunos-gettyimages.jpg',
    //         video: 'https://www.youtube.com/watch?v=YrYw0sxU2Cw',
    //         description:
    //             'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao ',
    //         phone: '31988888888',
    //         cep: 30300300,
    //         street: 'Rua de teste',
    //         streetNumber: 112,
    //         addressComplement: 'teste complementa',
    //         city: 'Belo Horizonte',
    //         state: 'MG',
    //         password:
    //             '$2b$10$kLPZmlVhVNgcbfhVNPdpc.bIPQsb0HOArD71icB9uB5L4wkOXZHlW',
    //         createdAt: '2020-08-10T17:19:29.000Z',
    //         updatedAt: '2020-08-10T17:19:29.000Z',
    //         CourseId: 1 },
    //     { id: 3,
    //         name: 'aluno 1',
    //         email: 'aluno1@email.com',
    //         type: 2,
    //         photo:
    //             'https://nova-escola-producao.s3.amazonaws.com/fme9Nu3B2KpXWDFqnUn88JYJUWx2sUCFyZGBBvy9jAHxabd55BsW76mDT5av/atencao-alunos-gettyimages.jpg',
    //         video: 'https://www.youtube.com/watch?v=YrYw0sxU2Cw',
    //         description:
    //             'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao ',
    //         phone: '31988888888',
    //         cep: 30300300,
    //         street: 'Rua de teste',
    //         streetNumber: 112,
    //         addressComplement: 'teste complementa',
    //         city: 'Belo Horizonte',
    //         state: 'MG',
    //         password:
    //             '$2b$10$kLPZmlVhVNgcbfhVNPdpc.bIPQsb0HOArD71icB9uB5L4wkOXZHlW',
    //         createdAt: '2020-08-10T17:19:29.000Z',
    //         updatedAt: '2020-08-10T17:19:29.000Z',
    //         CourseId: 1 },
    //     { id: 4,
    //         name: 'aluno 1',
    //         email: 'aluno1@email.com',
    //         type: 2,
    //         photo:
    //             'https://nova-escola-producao.s3.amazonaws.com/fme9Nu3B2KpXWDFqnUn88JYJUWx2sUCFyZGBBvy9jAHxabd55BsW76mDT5av/atencao-alunos-gettyimages.jpg',
    //         video: 'https://www.youtube.com/watch?v=YrYw0sxU2Cw',
    //         description:
    //             'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao ',
    //         phone: '31988888888',
    //         cep: 30300300,
    //         street: 'Rua de teste',
    //         streetNumber: 112,
    //         addressComplement: 'teste complementa',
    //         city: 'Belo Horizonte',
    //         state: 'MG',
    //         password:
    //             '$2b$10$kLPZmlVhVNgcbfhVNPdpc.bIPQsb0HOArD71icB9uB5L4wkOXZHlW',
    //         createdAt: '2020-08-10T17:19:29.000Z',
    //         updatedAt: '2020-08-10T17:19:29.000Z',
    //         CourseId: 1 },
    //     { id: 5,
    //         name: 'aluno 1',
    //         email: 'aluno1@email.com',
    //         type: 2,
    //         photo:
    //             'https://nova-escola-producao.s3.amazonaws.com/fme9Nu3B2KpXWDFqnUn88JYJUWx2sUCFyZGBBvy9jAHxabd55BsW76mDT5av/atencao-alunos-gettyimages.jpg',
    //         video: 'https://www.youtube.com/watch?v=YrYw0sxU2Cw',
    //         description:
    //             'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao ',
    //         phone: '31988888888',
    //         cep: 30300300,
    //         street: 'Rua de teste',
    //         streetNumber: 112,
    //         addressComplement: 'teste complementa',
    //         city: 'Belo Horizonte',
    //         state: 'MG',
    //         password:
    //             '$2b$10$kLPZmlVhVNgcbfhVNPdpc.bIPQsb0HOArD71icB9uB5L4wkOXZHlW',
    //         createdAt: '2020-08-10T17:19:29.000Z',
    //         updatedAt: '2020-08-10T17:19:29.000Z',
    //         CourseId: 1 }
    //     ];



    return {
        props: {
            students
        }
    }
}
