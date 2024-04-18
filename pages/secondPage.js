import Link from "next/link";

const SecondPage = ({query}) => {
    return (
        <div>
            <h1>{query.title}</h1>
            <p>Texto Fixo!</p>
        </div>
    );
}

SecondPage.getInitialProps = ({query}) => ({query});

export default SecondPage;