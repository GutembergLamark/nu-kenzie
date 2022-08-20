import "./style.css";

function Header({ setClick, setLoading }) {
  return (
    <header className="header">
      <div className="header__content">
        <figure className="header__containerLogo">
          <img
            className="containerLogo__img"
            src={require("../../assets/NuKenzie.png")}
            alt=""
          />
        </figure>
        <div>
          <button
            className="header__button"
            onClick={() => {
              setClick(false);
              setLoading(false);
            }}
          >
            Inicio
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
