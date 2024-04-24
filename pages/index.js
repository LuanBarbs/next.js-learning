import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const ListLink = (props) => {
    return (
        <li>
            <Link className="textLink" as={`/p/${props.title}`} href={`/secondPage?title=${props.title}`}>
                {props.title}
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

            <style jsx global>
                {`
                h1 {
                    font-family: 'Arial';
                    font-size: 40px;
                    padding: 20px;
                }
                ul {
                    margin: 20px;
                    padding: 20px;
                    list-style: none;
                    border-width: 1px;
                    border-style: solid;
                    border-color: black;
                    border-radius: 5px;
                }
                li {
                    display: inline;
                    padding: 10px;
                }
                .textLink {
                    color: blue;
                    font-size: 18px;
                    text-decoration: none;
                }
                
                `}
            </style>
        </div>
    );
};