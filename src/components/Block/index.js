import React from "react"
import "./block.sass"
import icon_option from '../../assets/icons/icon_option.svg'
import { useInView } from 'react-intersection-observer'

const Block = ({imageSrc, title, text, options, flipped}) => {
    const { ref, inView } = useInView({
        threshold: 0.4
    })
    const renderContent = () => {
        const renderContentOptions = () => {
            if(!options){
                return <></>
            } else{
                return (
                    <div className="block__options">
                        <div className="block__option1">
                            <img src={icon_option} alt="option icon"></img>
                            <h3 className="block__options--title">Title Goes Here</h3>
                            <p className="block__options--text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                        </div>
                        <div className="block__option2">
                            <img src={icon_option} alt="option icon"></img>
                            <h3 className="block__options--title">Title Goes Here</h3>
                            <p className="block__options--text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                        </div>
                    </div>
                )
            }
        }
        if(!flipped){
            return (
                <>
                    <img src={imageSrc} className="block__image" alt="landie"></img>
                    <div className="block__content">
                        <h2 className="block__title">{title}</h2>
                        <div className="block__text">{text}</div>
                        {renderContentOptions()}
                    </div>
                </>
            );
        } else{
            return (
                <>
                    <div className="block__content">
                        <h2 className="block__title">{title}</h2>
                        <div className="block__text">{text}</div>
                        {renderContentOptions()}
                    </div>
                    <img src={imageSrc} className="block__image" alt="landie"></img>
                </>
            );
        }
    }
    return (
        <section id='about' className={inView ? "block block--zoom" : "block"} ref={ref} >{renderContent()}</section>
    )
}

export default Block