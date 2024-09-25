
interface MenuProps {
    classStyle: string;
  }

function Menu({ classStyle }: MenuProps) {
    return (
        <div className={classStyle}>
            <span>HOME</span>
            <span>PROJETOS</span>
            <span>CONEXÃO 9</span>
            <span>SOBRE</span>
            <span>CONTATOS</span>
        </div>
    )
}

export default Menu