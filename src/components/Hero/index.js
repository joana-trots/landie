import React from "react"
import "./hero.sass"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__text">
                <h1>Introduce Your Product Quickly &amp;&nbsp;Effectively</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et&nbsp;magnis dis parturient montes, nascetur ridiculus</p>
                <p>mus. Donec quam felis, ultricies nec, pellentesque&nbsp;eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>
            <div className="hero__cta">
                <a href="#pricing" title="pricing" className="btn btn__primary">Purchase UI Kit</a>
                <a href="#about" title="about" className="btn btn__secondary">Learn More</a>
            </div>
        </section>
    )
}


export default Hero