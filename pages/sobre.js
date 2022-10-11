const db = require('./api/db.json');

export default function Sobre() {
    const data = JSON.parse(JSON.stringify(...db))
    return (
        <div>
            <p>Esta é a pagina Sobre</p>
            <div>{JSON.stringify(...db)}</div>
            <div>
                {`Nome: ${data.id}, ID: ${data.nome}`}
                <table border = '1'>
                    <row><dt>{data.id}</dt></row>
                    <row><dt>{data.nome}</dt></row>
                </table>
            </div>
        </div>
    )
}