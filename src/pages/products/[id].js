export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            }
        }, {
            params: {
                id: '2'
            }
        }],
        fallback: 'blocking',
        // o fallback: true
        // dá uma experiência melhor ao usuário pois é gerada uma página estática durante o build da página
        // com o delay e o fallback: 'blocking'
        // se a página for gerada UMA VEZ
        // mesmo que fora dos parametros do getStaticPaths()
        // a mesma, fica em cache e é redistribuida.
    }
};

export async function getStaticProps(context) {
    await delay(5000);
    const id = context.params.id;

    // aqui faria o contato com o bd
    // desta forma, o site se torna MUITO PERFOMÁTICO
    // estudar mongoDB
    // https://github.com/mongodb/mongo

    return {
        props: {
            id: id
        }
    }
}


export default function Produtos(props) {
    // props do getServerSideProps
    // retorna o id acrescentado á página
    return (
        <div>Id do produto: {props.id}</div>
    )
}

function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

/*
export async function getServerSideProps(context) {
    // não roda no processo de build
    // roda todas as vezes que é chamado

    // context recebe request e response
    const id = context.query.id;

    return {
        props: {
            id: id
        }
    }
}
*/