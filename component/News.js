import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { _tr } from "../services/translate"



const News = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <div className="navigation-wrapper container text-centered">
                <div className="container">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1 d-flex flex-column justify-content-center">
                        <span className="text-muted lead">{_tr("NewsText1")}</span>
                    </div>
                    <div className="keen-slider__slide number-slide2 d-flex flex-column justify-content-center">
                        <span className="text-muted lead">{_tr("NewsText2")}</span>
                    </div>
                    <div className="keen-slider__slide number-slide3  d-flex flex-column justify-content-center">
                        <span className="text-muted lead">{_tr("NewsText3")}</span>
                    </div>
                    <div className="keen-slider__slide number-slide4  d-flex flex-column justify-content-center">
                        <span className="text-muted lead">{_tr("NewsText4")}</span>
                    </div>
                    <div className="keen-slider__slide number-slide5  d-flex flex-column justify-content-center">
                        <span className="text-muted lead">{_tr("NewsText5")}</span>
                    </div>
                </div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </>
    );
};

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left MobDnone" : "arrow--right MobDnone"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

export default News;