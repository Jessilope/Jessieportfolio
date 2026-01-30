import { colors, typography } from '../tokens'
import ProjectCard from './ProjectCard'

const ProjectsGrid = ({ projects }) => {
  const cardsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }

  return (
    <div style={cardsContainerStyles}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          name={project.name}
          tags={project.tags}
          backgroundColor={project.backgroundColor}
          route={project.route}
        />
      ))}
    </div>
  )
}

export default ProjectsGrid
