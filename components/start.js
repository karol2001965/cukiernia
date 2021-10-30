import React from 'react'
import '../style/start.scss'
import '../style/general.scss'
// import One from '../zdjecia/1.JPG'
export default function start() {
    return (
        <main className="container_all">
            <div className="container_general">
                <div className="start_photo">

                </div>

                <div className="description">
                    <title className="title height_reset">
                        <h2>Personalizacja!</h2>
                    </title>
                    <p className="white_text">Na Twoją prośbę zamówienie może zostać spersonalizowane. Wystarczy, że miejscu wyznaczonym na dodatki/personalizacje wpiszesz swoje prośby. W zależnosci od dodatku cena może się zmienić.</p>
                </div>
                <div className="content start_content">

                    <div className="option start_option">
                        <img src={"/zdjecia/" + "1" + ".JPG"}className="photo"></img>
                        <p>Torty</p>
                    </div>
                    <div className="option start_option">
                        <img src={"/zdjecia/" + "1" + ".JPG"}className="photo photo_hover"></img>

                        <p>Przekąski</p>
                    </div>
                    <div className="option start_option">
                        <img src={"/zdjecia/" + "1" + ".JPG"}className="photo"></img>
                        <p>Ciastka</p>
                    </div>




                </div>
            </div>
        </main>
    )
}
