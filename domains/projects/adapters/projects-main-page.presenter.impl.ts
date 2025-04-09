import { marked } from 'marked'
import type { ProjectsPresenter } from '~/domains/projects/ports/projects.presenter'
import type { Project, ProjectViewModel } from '~/domains/projects/entities/Project'

export class ProjectsMainPagePresenterImpl implements ProjectsPresenter {
  constructor(
    private readonly projectsViewModel: (viewModel: ProjectViewModel[]) => void,
  ) {}

  public async present(projects: Project[]) {
    const formattedProjects = await Promise.all(projects.map(this.toViewModel))
    this.projectsViewModel(formattedProjects)
  }

  private toViewModel = async (project: Project): Promise<ProjectViewModel> => {
    return {
      title: project.title,
      startDate: project.startDate.getFullYear().toString(),
      description: await marked.parse(project.description),
      content: project.content,
      coverImage: project.coverImage,
      endDate: this.formatEndDate(project.startDate, project.endDate),
      location: project.location,
      position: project.position,
      slug: project.slug,
      projectLink: `/project/${project.slug}`,
      technologies: project.technologies,
    }
  }

  private formatEndDate(startDate: Date, endDate: Date | null): string | null {
    if (!endDate || startDate.getFullYear() === endDate.getFullYear()) {
      return null
    }

    return `${new Date(endDate).getFullYear()}`
  }
}
