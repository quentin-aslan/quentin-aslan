import { marked } from 'marked'
import type { Project, ProjectViewModel } from '~/domains/projects/entities/Project'
import type { ProjectPresenter } from '~/domains/projects/ports/project.presenter'
import { applyTailwindClasses } from '~/domains/apply-tailwind-classes'

export class ProjectPresenterImpl implements ProjectPresenter {
  constructor(
    private readonly projectViewModel: (viewModel: ProjectViewModel) => void,
  ) {}

  public async present(project: Project) {
    const formattedProject = await this.toViewModel(project)
    this.projectViewModel(formattedProject)
  }

  private toViewModel = async (project: Project): Promise<ProjectViewModel> => {
    const description = await marked.parse(project.description)
    const content = await marked.parse(project.content)

    return {
      title: project.title,
      startDate: project.startDate.getFullYear().toString(),
      description: applyTailwindClasses(description),
      content: applyTailwindClasses(content),
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
