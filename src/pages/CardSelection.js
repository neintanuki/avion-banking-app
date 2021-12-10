import style from './styles/Home.module.css';

import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

import logo from "../assets/bnmlogo.svg";

// fc = front card
import fcBlack from "../assets/cards/front/fBlack.png"
import fcBlue from "../assets/cards/front/fBlue.png"
import fcGreen from "../assets/cards/front/fGreen.png"
import fcRed from "../assets/cards/front/fRed.png"
import fcWhite from "../assets/cards/front/fWhite.png"
import fcYellow from "../assets/cards/front/fYellow.png"

// bc = back card
import bcBlack from "../assets/cards/back/bBlack.png"
import bcBlue from "../assets/cards/back/bBlue.png"
import bcGreen from "../assets/cards/back/bGreen.png"
import bcRed from "../assets/cards/back/bRed.png"
import bcWhite from "../assets/cards/back/bWhite.png"
import bcYellow from "../assets/cards/back/bYellow.png"

// dc = digital card
import dcBlack from "../assets/cards/digital/dBlack.png"
import dcBlue from "../assets/cards/digital/dBlue.png"
import dcGreen from "../assets/cards/digital/dGreen.png"
import dcRed from "../assets/cards/digital/dRed.png"
import dcWhite from "../assets/cards/digital/dWhite.png"
import dcYellow from "../assets/cards/digital/dYellow.png"

export default function CardSelection() {
    return (
        <main className={style.home}>
            <header className="navcredit">
                <div className={style.container}>
                    <img className={`${style.bnmlogohome} ${style.rotating} `} src={logo} alt="bnm logo" />
                    <span className={style.bnmwordmark}>BNM</span>

                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/features">Features</a>
                        <a href="/cardselection" to="/cardselection">Credit</a>
                        <a href="/signin" className={style.signInCTA}>Sign In</a>
                    </nav>

                </div>
            </header>
            <div>
                <div className="card-wrapper black">
                    <div className="innerblackcard-wrapper">
                        <h3 className="black-platinum">The Black Platinum Card</h3>
                        <span className="blackcard-title">Buy anything you want with this card</span>
                        <button className="btn-apply btn-black">See if you're eligible for a card ></button>
                        <div className="blackcard-wrapper">
                            <img className="black-card" src={fcBlack} />
                            <img className="black-card" src={bcBlack} />
                            <img className="black-card" src={dcBlack} />
                            <img className="black-card" src={bcBlack} />
                            <img className="black-card" src={fcBlack} />
                            <img className="black-card" src={bcBlack} />
                        </div>
                    </div>
                </div>

                <div className="card-wrapper white">
                    <h3 className="cx-secure">Introducing the most secure network</h3>
                    <h1>BNM cards powered by <span className="underlined"><em>COIN-X</em></span></h1>
                </div>

                <div className="innercard-wrapper">
                    <div className="card-wrapper blue">
                        <h3 className="blue-titlecard"> Blue Card</h3>
                        <h2 className="blue-subject">A great value for your money card</h2>
                        <img className="blue-card" src={fcBlue} />
                        <button className="btn-apply btn-blue">Get this card ></button>
                    </div>
                    
                    
                    <div className="card-wrapper green">
                        <div className="green-wraper1">
                            <h3 className="green-titlecard"> Green Card</h3>
                            <h2 className="green-subject">Just the basics</h2>
                            <button className="btn-apply btn-green">Get this card ></button>
                        </div>
                        
                        <div className="green-wraper">
                            <img className="green-card" src={dcGreen} />
                            <img className="green-card" src={fcGreen} />
                            <img className="green-card" src={bcGreen} />
                        </div>
                        
                    </div>
                    
                </div>

                {/* <div className="innercard-wrapper">
                    <div className="card-wrapper yellow">

                    </div>
                    
                </div> */}

                

                
            </div>

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