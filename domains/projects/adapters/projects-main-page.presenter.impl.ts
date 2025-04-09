import { marked } from 'marked'
import type { ProjectsPresenter } from '~/domains/projects/ports/projects.presenter'
import type { Project, ProjectViewModel } from '~/domains/projects/entities/Project'
import { applyTailwindClasses } from '~/domains/apply-tailwind-classes'

export class ProjectsMainPagePresenterImpl implements ProjectsPresenter {
  constructor(
    private readonly projectsViewModel: (viewModel: ProjectViewModel[]) => void,
  ) {}

  public async present(projects: Project[]) {
    const formattedProjects = (await Promise.all(projects.sort(this.sortByDateDescending).map(this.toViewModel)))
    this.projectsViewModel(formattedProjects)
  }

  private sortByDateDescending = (a: Project, b: Project): number => {
    const dateA = new Date(a.startDate)
    const dateB = new Date(b.startDate)

    return dateB.getTime() - dateA.getTime()
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
