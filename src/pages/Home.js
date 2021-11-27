import './styles/Home.css';

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
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Features</a>
                        <a href="" className="sign-in-cta">Sign In</a>
                    </nav>

                </div>
            </header>

            <section id="home" className="two-col">
                <div className="container">
                    <div className="left-side">
                        <h1 className="title">Manage your bank account</h1>
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
                    <h1 className="title">About Us</h1>
                    <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rerum officiis, repellendus, eveniet consectetur pariatur sed possimus temporibus assumenda error commodi ipsam maxime suscipit nobis hic? Modi, sapiente? Voluptate quo eaque voluptates laborum sequi mollitia aut, officiis dolor placeat perspiciatis? Eveniet possimus similique laborum qui minus explicabo voluptatibus, eius consequatur.</p>
                </div>
            </section>

            <section id="features">
                <div className="container">
                    <h1 className="title">Features</h1>
                    <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores laborum sunt similique in exercitationem neque tempore consectetur sapiente perferendis!</p>

                    <div className="feature-list">
                        <div className="feature">
                            <img src={onlineBanking} alt="online-banking-img"/>
                            <h2 className="title">Banking made easy</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam voluptatum quidem a omnis culpa autem fuga amet, in harum.</p>
                        </div>
                        <div className="feature">
                            <img src={dashboard} alt="dashboard-img"/>
                            <h2 className="title">Dashboard</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam voluptatum quidem a omnis culpa autem fuga amet, in harum.</p>
                        </div>
                        <div className="feature">
                            <img src={ui} alt="ui-img"/>
                            <h2 className="title">Friendly UI</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam voluptatum quidem a omnis culpa autem fuga amet, in harum.</p>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}