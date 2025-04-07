import type { ProjectsPresenter } from '~/domains/projects/ports/projects.presenter'
import type { Project, ProjectViewModel } from '~/domains/projects/entities/Project'

export class ProjectsMainPagePresenterImpl implements ProjectsPresenter {
  constructor(
    private readonly projectsViewModel: (viewModel: ProjectViewModel[]) => void,
  ) {}

  present(projects: Project[]): void {
    const projectFormatted: ProjectViewModel[] = projects.map((project) => {
      return {
        title: project.title,
        description: project.description,
        content: project.content,
        coverImages: project.coverImages,
        endDate: project.endDate,
        location: project.location,
        position: project.position,
        slug: project.slug,
        startDate: project.startDate,
        stack: project.stack,
      }
    })

    this.projectsViewModel(projectFormatted)
  }
}
