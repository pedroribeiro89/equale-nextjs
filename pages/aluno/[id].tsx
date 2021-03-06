import Layout from '../../components/layout'
import fetch from "node-fetch";
import {GetStaticProps} from "next";
import Head from "next/dist/next-server/lib/head";
import {HEAD_CONFIG} from "../../components/head-config";
import studentDetailStyle from '../../styles/student-detail.module.scss';
import Link from "next/link";
import {listStudents} from "../index";

export default function Student({student}) {
    return <Layout>
        <Head>
            <title>{HEAD_CONFIG.title}</title>
        </Head>
        <article className={studentDetailStyle.student}>
            <h1>{student.name}</h1>
            <img alt="Imagem Aluno" src={student.photo} />

            <p> {student.description} </p>

            <Link href="/doacao">
                <button> <strong>Doe agora para Equale e ajude o {student.name}</strong> </button>
            </Link>
            <br/>
            {
                student.video ?
                <iframe src={student.video} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen /> : ''
            }
        </article>
    </Layout>
}

export async function getStaticPaths() {
    let students = await listStudents();

    const paths = [];
    students.map(student => {
        paths.push({ params: { id: student.id.toString() } });
    });
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async context => {
    const res = await fetch(process.env.BASE_URL + '/students/' + context.params.id);
    const student = await res.json();
    return {
        props: {
            student
        }
    };
};


