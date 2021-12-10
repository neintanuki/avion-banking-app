import style from './styles/Home.module.css';

import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

import piggyBank from '../assets/piggy-bank-and-plants.svg';
import dashboard from '../assets/dashboard.svg';
import ui from '../assets/ui.svg';
import onlineBanking from '../assets/online-banking.svg';

import logo from "../assets/bnmlogo.svg";
import CardSelection from '../components/CardSelection';
import { NavLink } from 'react-router-dom';
import { Nav } from "react-bootstrap";

export default function Home() {
    return (
        <main className={style.home}>
            <header>
                <div className={style.container}>
                    <img className={style.bnmlogohome} src={logo} alt="bnm logo" />
                    <span className={style.bnmwordmark}>BNM</span>

                    <nav>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#features">Features</a>
                        <a href="/cardselection">Credit</a>
                        <a href="/signin" className={style.signInCTA}>Sign In</a>
                    </nav>

                </div>
            </header>
            <Nav>
                <NavLink className={style.navLink} to="/cardselection">Credit</NavLink>
            </Nav>

            <section id={style.home} className={style.twoCol}>
                <div className={style.container}>
                    <div className={style.leftSide}>
                        <h1 className={`${style.title} f-lg`}>Manage your bank account</h1>
                        <p className={style.subtitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum soluta consectetur saepe alias fuga enim quia possimus! Commodi, magni.</p>
                    </div>

                    <div className={style.rightSide}>
                        <img src={piggyBank} alt="piggy-bank"/>
                    </div>
                </div>
            </section>

            <section id={style.about} className={style.twoCol}>
                <div className={style.leftSide}>
                    {/* illustration */}
                </div>
                <div className={style.rightSide}>
                    <div className="text-content">
                        <h1 className={`${style.title} f-lg`}>About Us</h1>
                        <p className={style.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rerum officiis, repellendus, eveniet consectetur pariatur sed possimus temporibus assumenda error commodi ipsam maxime suscipit nobis hic? Modi, sapiente? Voluptate quo eaque voluptates laborum sequi mollitia aut, officiis dolor placeat perspiciatis? Eveniet possimus similique laborum qui minus explicabo voluptatibus, eius consequatur.</p>
                    </div>
                </div>
            </section>

            <section id={style.features}>
                <div className={style.container}>
                    <div className={style.textContent}>
                        <h1 className={`${style.title} f-md`}>Features</h1>
                        <p className={style.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores laborum sunt similique in exercitationem neque tempore consectetur sapiente perferendis!</p>
                    </div>

                    <div className={style.featureList}>
                        <div className={style.feature}>
                            <div className={style.featureHeader}>
                                <img src={onlineBanking} alt="online-banking-img"/>
                            </div>
                            <div className={style.featureBody}>
                                <h2 className={`${style.title} f-sm`}>Banking made easy</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam voluptatum quidem a omnis culpa autem fuga amet, in harum.</p>
                            </div>
                        </div>
                        <div className={style.feature}>
                            <div className={style.featureHeader}>
                                <img src={dashboard} alt="dashboard-img"/>
                            </div>
                            <div className={style.featureBody}>
                                <h2 className={`${style.title} f-sm`}>Dashboard</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam voluptatum quidem a omnis culpa autem fuga amet, in harum.</p>
                            </div>
                        </div>
                        <div className={style.feature}>
                            <div className={style.featureHeader}>
                                <img src={ui} alt="ui-img"/>
                            </div>
                            <div className={style.featureBody}>
                                <h2 className={`${style.title} f-sm`}>Friendly UI</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam voluptatum quidem a omnis culpa autem fuga amet, in harum.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <footer className={style.footer}>
                <div className={style.container}>

                    <div className={style.copyright}>
                        {/* logo */}
                        <span className={style.copyrightText}>AR. All Rights Reserved 2021</span>
                    </div>

                    <div className={style.footerLinks}>
                        <h3 className={`${style.title} f-sm`}>Main Navigation</h3>
                        <a href="#home">Home</a>
                        <a href="#">Dashboard</a>
                        <a href="#">Pricing</a>
                    </div>

                    <div className={style.footerLinks}>
                        <h3 className={`${style.title} f-sm`}>Company</h3>
                        <a href="#about">About Us</a>
                        <a href="#">Blog</a>
                        <a href="#">Newsletter</a>
                    </div>

                    <div className={style.socialLinks}>
                        <h3 className={`${style.title} f-sm`}>Social</h3>
                        <div className={style.socialBtnGroup}>
                            <a href="#" className={style.socialLink}>
                                <img src={facebook} alt="facebook"/>
                            </a>
                            <a href="#" className={style.socialLink}>
                                <img src={twitter} alt="twitter"/>
                            </a>
                            <a href="#" className={style.socialLink}>
                                <img src={instagram} alt="instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}