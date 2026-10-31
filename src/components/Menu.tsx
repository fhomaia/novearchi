import { Link } from 'react-router-dom';

interface MenuProps {
    classStyle: string;
    toggleMenu: () => void;
    showMenu: boolean;
  }

function Menu({ classStyle, toggleMenu, showMenu }: MenuProps) {
    return (
        <div className={classStyle}>
            <Link to="/"  className="text-white" style={{textDecoration: 'none'}} onClick={showMenu ? toggleMenu : () => {}} >HOME</Link>
            <Link to="/about" className="text-white" style={{ textDecoration: 'none' }} onClick={showMenu ? toggleMenu : () => {}}>SOBRE</Link>
            <Link to="/#projects"  className="text-white" style={{textDecoration: 'none'}} onClick={showMenu ? toggleMenu : () => {}}>PROJETOS</Link>
            <Link to="/#conexao"  className="text-white" style={{textDecoration: 'none'}} onClick={showMenu ? toggleMenu : () => {}}>CONEXÃO 9</Link>
            <Link to="/#contact"  className="text-white" style={{textDecoration: 'none'}} onClick={showMenu ? toggleMenu : () => {}}>CONTATOS</Link>
        </div>
    )
}

export default Menu