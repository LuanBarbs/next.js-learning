import Link from "next/link";

const ListLink = (props) => {
    return (
        <li>
            <Link href={`/secondPage?title=${props.title}`}>
                <p>{props.title}</p>
            </Link>
        </li>
    );
};

export default () => {
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <ListLink title="Cursos" />
                <ListLink title="Contato" />
                <ListLink title="Monitoria" />
            </ul>
        </div>
    );
};