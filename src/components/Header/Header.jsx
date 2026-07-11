import "./Header.css";

function Header() {
    return (
        <header className="site-header">

            <div className="brand">
                GBSE
            </div>

            <nav className="main-nav">

                <a href="#">The Expedition</a>

                <a href="#">Destinations</a>

                <a href="#">Journal</a>

                <a href="#">Preparation</a>

                <a href="#">About</a>

            </nav>

        </header>
    );
}

export default Header;