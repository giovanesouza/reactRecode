import Card from './Card';

const ComponentePrincipal = () => {
    return (
        <main>
            Conteúdo Principal

            <div>
                Conteúdo
            </div>

            {/* INCORPORANDO OUTRO COMPONENTE (CARDS) DENTRO DO COMPONENTE PRINCIPAL */}

            <Card id='Card 1' />
            <Card id='Card 2' />
            <Card id='Card 3' />

            <a href="#"> Teste link</a>
        </main>
    )

}

// EXPORTANDO O ARQUIVO
export default ComponentePrincipal;