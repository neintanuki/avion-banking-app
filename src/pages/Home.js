import './styles/Home.css';

import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

import piggyBank from '../assets/piggy-bank-and-plants.svg';
import dashboard from '../assets/dashboard.svg';
import ui from '../assets/ui.svg';
import onlineBanking from '../assets/online-banking.svg';

export default function Home() {
    return (
        <main className="home">
            <header>
                <div className="container">
                    <span className="logo">Logo</span>

                    <nav>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#features">Features</a>
                        <a href="/signin" className="sign-in-cta">Sign In</a>
                    </nav>

                </div>
            </header>

            <section id="home" className="two-col">
                <div className="container">
                    <div className="left-side">
                        <h1 className="title f-lg">Manage your bank account</h1>
                        <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum soluta consectetur saepe alias fuga enim quia possimus! Commodi, magni.</p>
                    </div>

                    <div className="right-side">
                        <img src={piggyBank} alt="piggy-bank"/>
                    </div>
                </div>
            </section>

            <section id="about" className="two-col">
                <div className="left-side">
                    {/* illustration */}
                </div>
                <div className="right-side">
                    <h1 className="title f-lg">About Us</h1>
                    <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rerum officiis, repellendus, eveniet consectetur pariatur sed possimus temporibus assumenda error commodi ipsam maxime suscipit nobis hic? Modi, sapiente? Voluptate quo eaque voluptates laborum sequi mollitia aut, officiis dolor placeat perspiciatis? Eveniet possimus similique laborum qui minus explicabo voluptatibus, eius consequatur.</p>
                </div>
            </section>

            <section id="features">
                <div className="container">
                    <h1 className="title f-md">Features</h1>
                    <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores laborum sunt similique in exercitationem neque tempore consectetur sapiente perferendis!</p>

                    <div className="feature-list">
                        <div className="feature">
                            <div className="feature-header">
                                <img src={onlineBanking} alt="online-banking-img"/>
                            </div>
                            <div className="feature-body">
                                <h2 className="title f-sm">Banking made easy</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam voluptatum quidem a omnis culpa autem fuga amet, in harum.</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-header">
                                <img src={dashboard} alt="dashboard-img"/>
                            </div>
                            <div className="feature-body">
                                <h2 className="title f-sm">Dashboard</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam voluptatum quidem a omnis culpa autem fuga amet, in harum.</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-header">
                                <img src={ui} alt="ui-img"/>
                            </div>
                            <div className="feature-body">
                                <h2 className="title f-sm">Friendly UI</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam voluptatum quidem a omnis culpa autem fuga amet, in harum.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <footer>
                <div className="container">

                    <div className="copyright">
                        {/* logo */}
                        <span className="copyright-text">All Rights Reserved 2021</span>
                    </div>

                    <div className="footer-links">
                        <h1 className="title f-sm">Main Navigation</h1>
                        <a href="">Home</a>
                        <a href="">Dashboard</a>
                        <a href="">Pricing</a>
                    </div>

                    <div className="footer-links">
                        <h1 className="title f-sm">Company</h1>
                        <a href="">About Us</a>
                        <a href="">Blog</a>
                        <a href="">Newsletter</a>
                    </div>

                    <div className="social-links">
                        <h1 className="title f-sm">Social</h1>
                        <div className="social-btn-group">
                            <a href="#" className="social-link">
                                <img src={facebook} alt="facebook"/>
                            </a>
                            <a href="#" className="social-link">
                                <img src={twitter} alt="twitter"/>
                            </a>
                            <a href="#" className="social-link">
                                <img src={instagram} alt="instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}