import Logo from "./Logo";
import LogoMini from "./LogoMini";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <LogoMini />
                    <div className="separador"></div>
                    <Logo />
                </div>

                <div className="logo-mobile">
                    <LogoMini />
                </div>

                <div className="instagram-mobile">
                    <Logo />
                </div>
        
                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div className="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

                <div className="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}