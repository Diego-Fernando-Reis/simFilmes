import logo from '../assets/logo-simfilmes.png'
import '../styles/header.css'

const Header = () => {
  return(
    <header>
      <div className="interno">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li className='active'><a href="">HOME</a></li>
            <li><a href="">QUEM SOMOS</a></li>
            <li><a href="">PORTIFÓLIO</a></li>
            <li><a href="">CLIENTES</a></li>
            <li><a href="">BLOG</a></li>
            <li><a href="">CONTATO</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;