import { marked } from 'marked'
import hljs from 'highlight.js'

const renderer = new marked.Renderer()

renderer.code = ({ lang, text }) => {
  const validLang = lang && hljs.getLanguage(lang) ? lang : 'plaintext'
  const highlighted = hljs.highlight(text, { language: validLang }).value
  return `<pre class="mb-4"><code class="hljs language-${validLang} rounded-md">${highlighted}</code></pre>`
}

marked.use({ renderer })

export default marked
