import logo from "../assets/bnmlogo.svg";

function NotFound() {
    return (
        <div className="not-found">
            <img className="bnm-404 rotating" src={logo} alt="bnm logo" />
            <h1>404</h1>
        </div>
    )
}

export default NotFound;