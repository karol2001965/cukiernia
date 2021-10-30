import React from 'react'
import '../style/oferta.scss'
import '../style/general.scss'
import LazyLoad from 'react-lazy-load';
// import One from '../zdjecia/1.JPG'
export default function oferta() {
    return (
        <main className="container_all">
            <div className="container_general">


                <title className="title">

                    <div className="stripe"></div>
                    <h2>TORTY</h2>
                    <div className="stripe"></div>

                </title>

                <div className="content">

                    <div className="option">
                        <LazyLoad offsetVertical={100}>
                        <img src={"/zdjecia/" + "1" + ".JPG"}className="photo"></img>
                        </LazyLoad>

                        <p>Tort czekoladowo malinowy z kawałkami czekolady</p>
                    </div>
                    <div className="option">
                        <img src={"/zdjecia/" + "1" + ".JPG"}className="photo"></img>
                        <p>Tort czekoladowo malinowy z kawałkami czekolady</p>
                    </div>
                    <div className="option">
                        <img src={"/zdjecia/" + "1" + ".JPG"}className="photo"></img>
                        <p>Tort czekoladowo malinowy z kawałkami czekolady</p>
                    </div>
                    <div className="option">
                        <img src={"/zdjecia/" + "1" + ".JPG"}className="photo"></img>
                        <p>Tort czekoladowo malinowy z kawałkami czekolady</p>
                    </div>



                </div>
                <title className="title">

                    <div className="stripe"></div>
                    <h2 id="przekaski">PRZEKĄSKI</h2>
                    <div className="stripe"></div>

                </title>

                <div className="content">

                    <div className="option">
                        <img src={"/zdjecia/" + "1" + ".JPG"}className="photo"></img>
                        <p>Tort czekoladowo malinowy z kawałkami czekolady</p>
                    </div>
                    <div className="option">
                        <img src={"/zdjecia/" + "1" + ".JPG"}className="photo"></img>
                        <p>Tort czekoladowo malinowy z kawałkami czekolady</p>
                    </div>
                    <div className="option">
                        <img src={"/zdjecia/" + "1" + ".JPG"}className="photo"></img>
                        <p>Tort czekoladowo malinowy z kawałkami czekolady</p>
                    </div>
                    <div className="option">
                    <LazyLoad offsetVertical={100}>
                        <img src={"/zdjecia/" + "1" + ".JPG"}className="photo"></img>
                        </LazyLoad>
                        <p>Tort czekoladowo malinowy z kawałkami czekolady</p>
                    </div>



                </div>
            </div>
        </main>
    )
}
