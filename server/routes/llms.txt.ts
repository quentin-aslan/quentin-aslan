import profile from '~~/content/profile.json'

const { caseStudies, blog, person, home, work } = profile
const site = person.url

// Plain-text summary for AI assistants (https://llmstxt.org).
export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return `# ${person.name}

> ${home.en.title}. ${home.en.lead}

${home.en.availability} Contact: ${person.email}. LinkedIn: ${person.linkedin}. GitHub: ${person.github}.

## Pages

- [Home (English)](${site}/): selected projects, experience, accessibility, skills, testimonials, about
- [Accueil (français)](${site}/fr)
- [Inicio (español)](${site}/es)
${caseStudies.map(c => `- [${c.title.en}](${site}/work/${c.slug}): ${c.description.en}`).join('\n')}
${caseStudies.filter(c => c.letter).map(c => `- [Recommendation letter, ${c.title.en.split(':')[0]}](${site}/work/${c.slug}#letter)`).join('\n')}
${blog.map(b => `- [${b.title}](${site}/blog/${b.slug}): ${b.description}`).join('\n')}

## Experience

${work.map(w => `- ${w.start} to ${w.end ?? 'present'}: ${w.role.en}, ${w.org} (${w.place.en})`).join('\n')}

## CV

- [CV (English, PDF)](${site}${profile.cv.en})
- [CV (français, PDF)](${site}${profile.cv.fr})

## Source

- [Source code of this site](https://github.com/quentin-aslan/quentin-aslan)
`
})
