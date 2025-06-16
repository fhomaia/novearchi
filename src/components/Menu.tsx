import { Link } from 'react-router-dom';

interface MenuProps {
    classStyle: string;
    toggleMenu: () => void;
    showMenu: boolean;
  }

function Menu({ classStyle, toggleMenu, showMenu }: MenuProps) {
    return (
        <div className={classStyle}>
            <a href="#home"  className="text-white" style={{textDecoration: 'none'}} onClick={showMenu ? toggleMenu : () => {}} >HOME</a>
            <Link to="/about" className="text-white" style={{ textDecoration: 'none' }} onClick={showMenu ? toggleMenu : () => {}}>SOBRE</Link>
            <a href="#projects"  className="text-white" style={{textDecoration: 'none'}} onClick={showMenu ? toggleMenu : () => {}}>PROJETOS</a>
            <a href="#conexao"  className="text-white" style={{textDecoration: 'none'}} onClick={showMenu ? toggleMenu : () => {}}>CONEXÃO 9</a>
            <a href="#contact"  className="text-white" style={{textDecoration: 'none'}} onClick={showMenu ? toggleMenu : () => {}}>CONTATOS</a>
        </div>
    )
}

export default Menu