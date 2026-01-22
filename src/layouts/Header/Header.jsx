import './Header.scss'
import Logo from "@/components/Logo/Logo";

const Header = () => {
  return (<header className="header">
    <div className="header__inner container">
    <Logo loading="eager" />
    </div>
  </header>)
}

export default Header