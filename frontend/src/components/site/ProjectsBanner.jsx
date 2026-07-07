import React from 'react';

const ProjectsBanner = ({ title, image, mobimage, breadcrumbs = [], description }) => {
    return (
        <section className='projects-banner-section'>
            <div className='project-banner-img'>
                <img className='d-md-block d-none' src={image} alt={title} />
                <img className='d-md-none d-block' src={mobimage} alt={title} />
            </div>
            <div className='projects-banner-ttl'>
                <h1 className='mb-0'>{title}</h1>
                <div className='d-flex align-items-center gap-2 justify-content-center'>
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            <p className='mb-0'>{crumb}</p>
                            {index < breadcrumbs.length - 1 && <p className='mb-0'>&lt;</p>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsBanner;
