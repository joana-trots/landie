import React from "react"
import "./pricing.sass"
import { useInView } from 'react-intersection-observer'

const Pricing = () => {
    const { ref, inView } = useInView({
        threshold: 0.4
    })
    return (
        <section className="pricing" id='pricing'>
            <div className={inView ? "pricing__content pricing--zoom" : "pricing__content"} ref={ref}>
                <h2>A Price To Suit Everyone</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et&nbsp;magnis dis parturient montes, nascetur ridiculus</p>
                <div className="price">
                    <p>$40</p>
                    <p>UI Design Kit</p>
                </div>
                <div className="pricing__cta">
                    <p>See, One price. Simple.</p>
                    <a href="/" title="Purchase" className="btn btn__primary">Purchase Now</a>
                </div>
            </div> 
        </section>
    )
}

export default Pricing