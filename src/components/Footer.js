
// CASO QUEIRA INSERIR TAGS DENTRO DO OUTRA TAG, UTILIZAR "CHILDREN" COMO PARÂMETRO E, NA CHAMADA, COLOCAR AS TAGS DENTRO DO COMPONENTE QUE FOI CRIADO. NESTE CASO, DENTRO DA <Footer> </Footer>

const Footer = ({ children }) => {
    return (
        <footer>
            {children}
        </footer>
    )
}

export default Footer;