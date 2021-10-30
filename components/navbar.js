import React, { Component } from 'react'
import '../style/navbar.scss'
import '../style/general.scss'

import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'


// oferta,cennik,zamówienia,kontakt



export class navbar extends Component {

    state = {
        active: false,
        hoverOne: false,
        theposition: -100,
        checked_diety:false,
        checked_firma:false,



    };
    scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -110;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        let vhs = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vhs}px`);

        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            vhs * 100

        const scrolled = winScroll / height * 100
        if(scrolled===0){
        this.setState({
            theposition: false,
        })
    }
        if(scrolled>0 && scrolled<10){
        this.setState({
            theposition: true,
        })
    }

    }



    handlerhref = (e) => {
        e.stopPropagation();
        this.setState({ active: !this.state.active });
        const body = document.querySelector("body");
        body.classList.toggle("toggle_body");


    }

    handlerBurger = () => {
        this.setState({ active: !this.state.active })
        const body = document.querySelector("body");

        body.classList.toggle("toggle_body");
        // console.log(window.pageYOffset);
    }


    isCheckedDiety=()=>{
        this.setState({checked_diety:!this.state.checked_diety})
    }
    isCheckedFirma=()=>{
        this.setState({checked_firma:!this.state.checked_firma})
    }




    menuRollOpenOne = () => {
        this.setState({ hoverOne: !this.state.hoverOne })
    }
    render() {
        // console.log(window.pageYOffset);
        console.log("witam");
        return (
            <nav className={this.state.theposition ===true ? " container container_anim " : " container " && this.state.active == true ? "container container_anim_phone" : "container"}  >
                <div className=" container_nav ">
                    <Link to="/" onClick={this.handlerhref} ><img src={"/zdjecia/logo.png"} className="logo"></img></Link>



                    <section className={this.state.active ? " elements_container  navbar_phone_active" : " elements_container "}>



                        <div  className="element">
                            <Link to="/oferta" onClick={this.handlerhref} className={this.state.active  ? "element_anim roll_p " : "roll_p"}>Oferta</Link>
                            <input type="checkbox" name="a" id="a" class="css-checkbox" onChange={this.isCheckedFirma}/>
                                <label for="a" class="css-label">
                            <FontAwesomeIcon icon={faPlus}  className="plus" />
                            <FontAwesomeIcon icon={faMinus}  className="minus" />
                                </label>
                        </div>

                        <div className={this.state.hoverOne || this.state.checked_firma? " menu_roll menu_roll_open" : "menu_roll "}>
                            <HashLink to="/oferta/#przekaski" scroll={el => this.scrollWithOffset(el)} onClick={this.handlerhref}  className="roll_option">
                                Torty
                            </HashLink>
                            <Link to="/wspolpraca"onClick={this.handlerhref}  className="roll_option">Ciasta</Link>
                            <Link to="/wspolpraca"onClick={this.handlerhref}  className="roll_option">Przekąski</Link>
                        </div>








                        <Link to="/cennik" onClick={this.handlerhref} className="element" >
                            <p className={this.state.active ? "element_anim2  " : ""}>Cennik</p>
                        </Link>
                        <Link to="/zamówienia" onClick={this.handlerhref} className="element">
                            <p className={this.state.active ? "element_anim3  " : ""}>Zamówienia</p>
                        </Link>
                        <Link to="/kontakt" onClick={this.handlerhref} className="element ">
                            <p className={this.state.active ? "element_anim3  " : ""}>Kontakt</p>
                        </Link>
                    </section>

                    <div className={this.state.active ? " burger toggle_burger" : " burger"} onClick={this.handlerBurger}>

                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default navbar
