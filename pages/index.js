import Link from 'next/link';

function Home() {
    return (
        <div>
            <Link href="/sobre">
                <a>Acessar página sobre</a>
            </Link>
        </div>
    )
}

export default Home