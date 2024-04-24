import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const SecondPage = ({query}) => {
    return (
        <div>
            <Link href="/">
                <button id="backButton" type="button" className="btn btn-primary">back</button>
            </Link>
            <h1>{query.title}</h1>
            <p>Texto Fixo!</p>

            <style jsx global>
                {`
                    #backButton {
                        margin: 20px;
                    }
                    h1 {
                        font-family: 'Arial';
                        font-size: 40px;
                        padding: 20px;
                    }
                    p {
                        padding: 20px;
                    }
                `}
            </style>
        </div>
    );
}

SecondPage.getInitialProps = ({query}) => ({query});

export default SecondPage;