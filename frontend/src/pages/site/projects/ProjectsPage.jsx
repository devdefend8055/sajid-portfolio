import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectsBanner from '../../../components/site/ProjectsBanner';
import projectsData from '../../../staticData/projectsData';
import { ArrowUpRight } from 'lucide-react';

const ProjectsPage = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/*" />;
  }

  return (
    <>
      <ProjectsBanner
        title={project.title}
        image={project.image}
        mobimage={project.mobimage}
        breadcrumbs={project.breadcrumbs}
      />

      {project.description && (
        <section className="project-desc-section sidespace section-space">
          <h3>Project Description :</h3>
          <p
            className="banner-description mt-3"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          {
            project.liveLink && (
              <div className='d-flex justify-content-center mt-md-4 md-3'>
                <a href={project.liveLink} target='_blank' className='theme-btn'>Live Preview <ArrowUpRight /> </a>
              </div>
            )
          }
        </section>
      )}
    </>
  );
};

export default ProjectsPage;
