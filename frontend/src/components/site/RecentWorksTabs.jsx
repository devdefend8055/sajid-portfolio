import { CircleArrowOutUpRight } from 'lucide-react';
import React, { useState } from 'react';

const projects = [
    {
        category: 'Health care',
        imgSrc: '/assets/images/SahyadriHospitals.webp',
        project: 'Sahyadri Hospitals',
        shortDesc: 'Web development project',
        link: '/projects/sahyadri-hospitals',
    },
    {
        category: 'Health care',
        imgSrc: '/assets/images/LokmanyaHospitals.webp',
        project: 'Lokmanya Hospitals',
        shortDesc: 'Web development project',
        link: '/projects/lokmanya-hospitals',
    },
    {
        category: 'Workplace Essentials',
        imgSrc: '/assets/images/MHO.webp',
        project: 'My Health Office',
        shortDesc: 'Web development project',
        link: '/projects/my-health-office',
    },
    {
        category: 'Real Estate',
        imgSrc: '/assets/images/VTPAltitude.webp',
        project: 'VTP Altitude',
        shortDesc: 'Web development project',
        link: '/projects/vtp-altitude',
    },
    {
        category: 'Others',
        imgSrc: '/assets/images/OtherProjects.webp',
        project: 'Other Projects',
        shortDesc: 'Collabrative and Maintainance',
        link: '/projects/other-projects',
    },
];

const categories = ['All', ...new Set(projects.map(p => p.category))];

const RecentWorksTabs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const filteredProjects =
        activeIndex === 0
            ? projects
            : projects.filter(p => p.category === categories[activeIndex]);

    return (
        <div className='recent-work-tabs mt-md-4 mt-3'>
            <ul className="nav nav-pills d-flex justify-content-center align-items-center overflow-x-auto mb-md-4 mb-3" role="tablist">
                {categories.map((cat, index) => (
                    <li className="nav-item" role="presentation" key={index}>
                        <button
                            className={`nav-link ${activeIndex === index ? 'active theme-btn' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {cat}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active">
                    <div className='row align-items-center justify-content-center g-md-4 g-3'>
                        {filteredProjects.map((item, idx) => (
                            <div className='col-lg-4 col-sm-6' key={idx}>
                                <div className='my-recent-work-card'>
                                    <div className='recent-work-img-box'>
                                        <img
                                            src={item.imgSrc}
                                            alt={item.project}
                                        />
                                        <a href={item.link} className='recent-work text-decoration-none'>
                                            <div>
                                                <h3>{item.project}</h3>
                                                <p className='mb-0'>{item.shortDesc}</p>
                                            </div>
                                            <div className='recent-work-icon'>
                                                <CircleArrowOutUpRight />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RecentWorksTabs;
