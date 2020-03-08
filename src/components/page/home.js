// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import hypnosis from '../images/hypnosis.jpg'
import psychology from '../images/psychology.jpg'
import science from '../images/science.jpg'
import dreaming from '../images/dreaming.jpg'
import obe from '../images/obe.jpg'
import psychedelics from '../images/psychedelics.jpg'
import occultism from '../images/occultism.jpg'

const Home = ({ siteTitle }) => (
    <div className='content'>
        <h1 className='content__title'>Spiritus Rector</h1>
        <div className='content__page'>
            <p className='content__page--text'>
                A purus facilisi venenatis ullamcorper et urna, lectus etiam. Auctor dolor parturient sit laoreet. Massa eget neque maecenas donec enim convallis. Aenean vel urna ut eget sed sagittis, senectus blandit tempus. Enim commodo et sit cras egestas.
            </p>
            <h3 className='content__page--text content__page--highlight'>
                Témák:
            </h3>
            <div className='content__page--topics'>

                <figure className="content__page--topics-figure">
                    <img className='content__page--topics-figure-img' src={hypnosis}/>
                    <figcaption className='content__page--topics-figure-title'>Hipnózis</figcaption>
                </figure>
                <figure className="content__page--topics-figure">
                    <img className='content__page--topics-figure-img' src={psychology}/>
                    <figcaption className='content__page--topics-figure-title'>Pszichológia</figcaption>
                </figure>
                <figure className="content__page--topics-figure">
                    <img className='content__page--topics-figure-img' src={science}/>
                    <figcaption className='content__page--topics-figure-title'>Tudomány</figcaption>
                </figure>
                <figure className="content__page--topics-figure">
                    <img className='content__page--topics-figure-img' src={dreaming}/>
                    <figcaption className='content__page--topics-figure-title'>Álmodás</figcaption>
                </figure>
                <figure className="content__page--topics-figure">
                    <img className='content__page--topics-figure-img' src={obe}/>
                    <figcaption className='content__page--topics-figure-title'>Testen kívüli élmény</figcaption>
                </figure>
                <figure className="content__page--topics-figure">
                    <img className='content__page--topics-figure-img' src={psychedelics}/>
                    <figcaption className='content__page--topics-figure-title'>Pszichedelikumok</figcaption>
                </figure>
                <figure className="content__page--topics-figure">
                    <img className='content__page--topics-figure-img' src={occultism}/>
                    <figcaption className='content__page--topics-figure-title'>Okkult tudományok</figcaption>
                </figure>

            </div>
        </div>
    </div>
)

export default Home