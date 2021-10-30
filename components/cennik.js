import React, { Component } from 'react'

import '../style/kontakt.scss'
import '../style/cennik.scss'
// import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMapMarkedAlt,  faInbox, faPhoneSquareAlt, faDirections } from '@fortawesome/free-solid-svg-icons'
// import emailjs from 'emailjs-com'





export class cennik extends Component {
    state={
        checked:false,
        send:false,
        error:false
    }
    // isChecked=()=>{
    //     this.setState({checked:!this.state.checked})
    //     console.log(this.state.checked)
    // }
    //  sendEmail=(e)=> {

    //         e.preventDefault();
    //     if(this.state.checked==true){
    //         emailjs.sendForm()
    //             .then((result) => {
    //                 this.setState({send:!this.state.send})
    //             }, (error) => {
    //                 this.setState({error:!this.state.error})

    //             });
    //         e.target.reset();
    //     }else{
    //         alert("zgoda zazanaczona")
    //     }


    // }

    render() {
        const sent=
        <p>WYSŁANO</p>

        const error=<p>WYSŁANO</p>
                    console.log(this.state.send)
                    console.log(this.state.error)
        return (

            <main className="container_all">
                <div className="container_general">
                <title className="title">
                        <div className="stripe"></div>
                        <h2>Złóż zamówienie!</h2>
                        <div className="stripe"></div>
                    </title>
                    <p className="cennik_p">Cennik jest ustalany w zależności od wielkości, ilości oraz dodatkowych życzeń. Płatność zostanie po ustaleniu zamówienia w e-mailu zwrotnym</p>
                <div className="formularz margins">
                    <form id="cennik_form" onSubmit={this.sendEmail}>
                        <input placeholder="Imię" name="name"></input>

                        <input placeholder="E-mail" name="email"></input>
                        <input placeholder="Jaki produkt chcesz zamówić? (Słownie bądz numer)" name="produkt"></input>

                        <textarea placeholder="Dodatkowe prośby i pytania" name="message"></textarea>

                        <section className="chceckbox_container">
                            <input type="checkbox" className="chceckbox" onChange={this.isChecked}></input>Wyrażam zgode na przetwarzanie danych osobowych
                            </section>


                        <input type="submit" className="submit" value="Wyślij"></input>


                    </form>
                    {this.state.send? <p>WYSŁANO</p> : ""}
                        {this.state.error? <p>WYSŁANO</p> : ""}
                 </div>

                </div>
            </main>
        )
    }
}

export default cennik

