const Nav = () => {
    return (
        <div className="Nav flex justify-between align-middle px-5 pt-2">
            <div className="navLogo">
                <img src={process.env.PUBLIC_URL + `assets/Logo.png`} alt="Logo" />
            </div>
            <div className="navMenu">
                <img src={process.env.PUBLIC_URL + `assets/Logo.png`} alt="Logo" />
            </div>
        </div>
    )
}

export default Nav;