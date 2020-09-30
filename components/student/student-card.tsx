import {Student} from "../../models/student";
import styles from './student-card.module.scss'
import Link from 'next/link'

export interface StudentCardProps {
    student: Student
}

const StudentCard: React.FunctionComponent<StudentCardProps> = props => {
    const student = props.student;
    const shortDesc = student.description.length > 99 ? `${student.description.substring(0, 96)}...` : student.description;

    return (
        <section className={styles.card}>
            <img src={student.photo} />
            <h2>{student.name}</h2>
            <p>{shortDesc}</p>
            <Link href="/aluno/[id]" as={`/aluno/${student.id}`}>
                <button>Conhecer Aluno</button>
            </Link>
            <button className={styles.donate}>Doar</button>
        </section>
    );
};

export default StudentCard;
