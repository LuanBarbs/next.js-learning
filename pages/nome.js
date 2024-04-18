import Link from "next/link";

const Nome = () => {
    return (
        <div>
            <p>Meu nome é Luan Henrique da Silva Barbosa!</p>
            <Link href="/">
                <p>Ir para a primeira página.</p>
            </Link>
            <Link href="/secondPage">
                <p>Ir para a segunda página.</p>
            </Link>
        </div>
    );
}

export default Nome;