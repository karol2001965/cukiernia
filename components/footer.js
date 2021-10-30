import React from 'react'
import '../style/footer.scss'
import '../style/general.scss'
// import Logo from '../logo.png'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram, faFacebookSquare } from 'npm i @fortawesome/free-brands-svg-icons'
import ScrollToTop from 'react-router-scroll-top'

function footer() {
    return (
        <div className="container_all footer_container">
            <footer className="container_general footer">
                <section className="footer_info">
                    <div className="social_logo">
                        {/* <img src={Logo}></img> */}
                        <div className="social">
                            {/* <FontAwesomeIcon icon={faFacebookSquare} className="icon_footer" /> */}

                            <p>BoxDelux Catering</p>
                        </div>
                        <div className="social insta">
                            {/* <FontAwesomeIcon icon={faInstagram} className="icon_footer" /> */}

                            <p>@boxdelux_catering</p>
                        </div>

                    </div>
                    <div className="footer_options">
                        <h1>Oferta</h1>
                        <Link to="/oferta/#przekaski">
                        <p>Torty</p>
                        </Link>

                        <Link to="/oferta">
                        <p>Przekąski</p>
                        </Link>
                        <Link to="/ciastka">
                        <p>Ciastka</p>
                        </Link>
                    </div>
                    {/* <div className="footer_options">


                        <Link to="/cennik">
                        <h1>Cennik</h1>
                        </Link>
                        <Link to="/zamowienia">

                        <h1>Zamówienia</h1>
                        </Link>


                    </div> */}
                    <div className="footer_options">
                        <h1>Kontakt</h1>
                        <p>Biuro Obsługi Klienta
                            Tel: 514-312-711</p>
                        <p>Kremowo Karmelowo</p>
                        <p>E-mail:kremowokarmelowo@gmail.com</p>
                    </div>
                    <img src={"/zdjecia/logo.png"} className="logo logo_footer"></img>

                </section>
                <section className="footer_text">
                    {/* <p>Box Delux</p> */}
                    <hr></hr>
                    <p>© 2020 by Karol Koryciński</p>
                </section>
            </footer>
        </div>
    )
}

export default footer
