import Link from 'next/link';
import { _tr } from "../services/translate"

const Timeline = () => {
    return (
        <div className="RoadmapContainer-fluid row text-light">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-lg-6">

                    <div className="section_heading text-center">
                        <h2 className="display-3 fw-bold text-white py-5">{_tr("RoadmapTitle")}</h2>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">

                    <div className="apland-timeline-area">

                        <div className="single-timeline-area">
                            <div className="timeline-date-active wow fadeInLeft anim1" data-wow-delay="0.1s" >
                                <p>{_tr("may")}<br/>2022</p>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12 col-sm-12">
                                    <div className="single-timeline-content d-flex wow fadeInLeft anim2 cardHeight end-0" data-wow-delay="0.3s">
                                        <div className="timeline-icon"><i className="fa fa-address-card" aria-hidden="true"></i></div>
                                        <div className="timeline-text d-flex row justify-content-between">
                                            <p>{_tr("RoadmapText1")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-timeline-area">
                            <div className="timeline-date wow fadeInLeft anim1" data-wow-delay="0.1s" >
                                <p>{_tr("july")}<br/>2022</p>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="single-timeline-content d-flex wow fadeInLeft anim2 cardHeight" data-wow-delay="0.3s">
                                        <div className="timeline-icon"><i className="fa fa-address-card" aria-hidden="true"></i></div>
                                        <div className="timeline-text d-flex row justify-content-between">
                                            <p>{_tr("RoadmapText2")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-timeline-area">
                            <div className="timeline-date wow fadeInLeft anim1" data-wow-delay="0.1s" >
                                <p>{_tr("august")}<br/>2022</p>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="single-timeline-content d-flex wow fadeInLeft anim2 cardHeight" data-wow-delay="0.3s">
                                        <div className="timeline-icon"><i className="fa fa-address-card" aria-hidden="true"></i></div>
                                        <div className="timeline-text d-flex row justify-content-between">
                                            <p>{_tr("RoadmapText3")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-timeline-area">
                            <div className="timeline-date wow fadeInLeft anim1" data-wow-delay="0.1s" >
                                <p>{_tr("september")}<br/>2022</p>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="single-timeline-content d-flex wow fadeInLeft anim2 cardHeight" data-wow-delay="0.3s">
                                        <div className="timeline-icon"><i className="fa fa-address-card" aria-hidden="true"></i></div>
                                        <div className="timeline-text d-flex row justify-content-between">
                                            <p>{_tr("RoadmapText3")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-timeline-area">
                            <div className="timeline-date wow fadeInLeft anim1" data-wow-delay="0.1s" >
                                <p>{_tr("october")}<br/>2022</p>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="single-timeline-content d-flex wow fadeInLeft anim2 cardHeight" data-wow-delay="0.3s">
                                        <div className="timeline-icon"><i className="fa fa-address-card" aria-hidden="true"></i></div>
                                        <div className="timeline-text d-flex row justify-content-between">
                                            <p>{_tr("RoadmapText4")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;