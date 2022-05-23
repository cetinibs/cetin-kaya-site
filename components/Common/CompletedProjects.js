import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class CompletedProjects extends Component {
    render() {
        return (
            <>
                <div className="projects-area pt-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {this.props.subHeading}
                            </span>
                            <h2>
                                {this.props.heading}
                            </h2>
                        </div>

                        <div className="row justify-content-center">
                            {this.props.projects.map((item) => (
                                <div className="col-lg-4 col-md-6" key={item.id}>
                                    <div className="single-projects-box">
                                        <img 
                                            src={item.image} 
                                            alt={item.altText} 
                                        />
                                        <h3>{item.title}</h3>
                                        <span>{item.category}</span>

                                        <Link href={item.detailsUrl}>
                                            <a className="default-btn">
                                                {item.linkText} <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div> 
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

CompletedProjects.propTypes = {
    title: PropTypes.string,
}

CompletedProjects.defaultProps = {
    // Projects Header
    subHeading: "COMPLETED PROJECTS",
    heading: "You Can Check Our Projects as Inspirations",

    // Projects
    projects: [
        {
            id: 1,
            image: "/images/projects/projects1.jpg",
            altText: "Project Image",
            title: "Financial Consultancy",
            category: "Financial",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
        {
            id: 2,
            image: "/images/projects/projects2.jpg",
            altText: "Project Image",
            title: "Strategy Consultancy",
            category: "Strategy",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
        {
            id: 3,
            image: "/images/projects/projects3.jpg",
            altText: "Project Image",
            title: "Organizational Consultancy",
            category: "Consultancy",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
        {
            id: 4,
            image: "/images/projects/projects4.jpg",
            altText: "Project Image",
            title: "Tax Consultancy",
            category: "Tax",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
        {
            id: 5,
            image: "/images/projects/projects5.jpg",
            altText: "Project Image",
            title: "Business Consultancy",
            category: "Business",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
        {
            id: 6,
            image: "/images/projects/projects6.jpg",
            altText: "Project Image",
            title: "Marketing Consultancy",
            category: "Marketing",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
    ]
};