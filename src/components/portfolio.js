import React from 'react';

export default class Portfolio extends React.Component {
    render() {
        return (

            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-card">React</li>
                                <li data-filter=".filter-card">Java</li>
                                <li data-filter=".filter-card">Python</li>
                                <li data-filter=".filter-web">Operating System</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/java1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/java1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/java2.png" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/java2.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/java3.png" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/java3.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/os1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/os1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                       
                    </div>

                </div>
            </section>
        )
    }
}