
interface MenuProps {
    classStyle: string;
  }

function Menu({ classStyle }: MenuProps) {
    return (
        <div className={classStyle}>
            <a href="#home"  className="text-white" style={{textDecoration: 'none'}}>HOME</a>
            <a href="#about"  className="text-white" style={{textDecoration: 'none'}}>SOBRE</a>
            <a href="#projects"  className="text-white" style={{textDecoration: 'none'}}>PROJETOS</a>
            <a href="#conexao"  className="text-white" style={{textDecoration: 'none'}}>CONEXÃO 9</a>
            <a href="#contact"  className="text-white" style={{textDecoration: 'none'}}>CONTATOS</a>
        </div>
    )
}

export default Menu