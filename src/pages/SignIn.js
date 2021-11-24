import './styles/SignIn.css';

export default function SignIn() {
    return (
        <div className="sign-in">
            <div className="left-side">

            </div>
            <div className="right-side">
                <form action="" className="sign-in-form">
                    <h1 className="title">Sign In</h1>
                    <p className="subtitle">Sign in to continue</p>

                    <div className="form-control">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" name="username" className="form-input"/>
                    </div>

                    <div className="form-control">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" className="form-input"/>
                    </div>

                    <button className="btn-submit">Sign In</button>

                </form>
            </div>
        </div>
    )
}