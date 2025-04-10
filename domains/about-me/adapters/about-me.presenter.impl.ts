import { marked } from 'marked'
import type { AboutMePresenter } from '~/domains/about-me/ports/about-me.presenter'
import type { AboutMe } from '~/domains/about-me/entities/AboutMe'

export class AboutMePresenterImpl implements AboutMePresenter {
  constructor(
    private readonly aboutMeViewModel: (viewModel: AboutMe) => void,
  ) {}

  public async present(aboutMe: AboutMe) {
    const content = await marked.parse(aboutMe.content)
    const heroContent = await marked.parse(aboutMe.heroContent)

    const data = {
      title: aboutMe.title,
      subtitle: aboutMe.subtitle,
      content: this.applyTailwindClassesCustom(content),
      heroContent: this.applyTailwindClassesCustom(heroContent),
    }

    this.aboutMeViewModel(data)
  }

  private applyTailwindClassesCustom(html: string): string {
    return html.replace(/<h1>/g, '<h1 class="text-3xl font-bold">')
      .replace(/<h2>/g, '<h2 class="text-2xl font-semibold">')
      .replace(/<h3>/g, '<h3 class="text-xl font-semibold">')
      .replace(/<p>/g, '<p class="text-lg text-gray-600">')
      .replace(/<ul>/g, '<ul class="list-disc pl-5 ">')
      .replace(/<ol>/g, '<ol class="list-decimal pl-5">')
      .replace(/<a>/g, '<a class="text-blue-500 hover:text-blue-700">')
      .replace(/<strong>/g, '<strong class="font-bold">')
  }
}
