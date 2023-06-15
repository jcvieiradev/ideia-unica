import Link from 'next/link';

function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toUTCString();

    return (
        <div>
            <div>
            <h1>Tempo</h1>
            <Link href="/">
                Acessar página Home
            </Link>
            </div>
            <div>
                <div>{dynamicDateString} (dinâmico)</div>
                <div>{props.staticDateString} (estático)</div>
            </div>
        </div>
    )
}

export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toUTCString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo;