import type { ProjectsPresenter } from '~/domains/projects/ports/projects.presenter'
import type { Project, ProjectViewModel } from '~/domains/projects/entities/Project'

export class ProjectsMainPagePresenterImpl implements ProjectsPresenter {
  constructor(
    private readonly projectsViewModel: (viewModel: ProjectViewModel[]) => void,
  ) {}

  public present(projects: Project[]): void {
    const projectFormatted: ProjectViewModel[] = projects.map((project) => {
      return {
        title: project.title,
        startDate: project.startDate.getFullYear().toString(),
        description: project.description,
        content: project.content,
        coverImages: project.coverImages,
        endDate: this.formatEndDate(project.startDate, project.endDate),
        location: project.location,
        position: project.position,
        slug: project.slug,
        technologies: project.technologies,
      }
    })

    this.projectsViewModel(projectFormatted)
  }

  private formatEndDate(startDate: Date, endDate: Date | null): string | null {
    if (!endDate || startDate.getFullYear() === endDate.getFullYear()) {
      return null
    }

    return `${new Date(endDate).getFullYear()}`
  }
}
