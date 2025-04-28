export function applyTailwindClasses(html: string): string {
  return html
    .replace(/<h1>/g, '<h1 class="text-4xl font-bold mb-6 text-gray-900">')
    .replace(/<h2>/g, '<h2 class="text-3xl font-semibold mb-5 text-gray-800">')
    .replace(/<h3>/g, '<h3 class="text-2xl font-semibold mb-4 text-gray-700">')
    .replace(/<p>/g, '<p class="text-base text-gray-700 leading-relaxed mb-6">')
    .replace(/<ul>/g, '<ul class="list-disc pl-5 mb-6">')
    .replace(/<ol>/g, '<ol class="list-decimal pl-5 mb-6">')
    .replace(/<li>/g, '<li class="mb-3">')
    .replace(/<hr>/g, '<hr class="my-8 border-gray-200" />')
    .replace(/<a /g, '<a class="text-blue-600 hover:underline" ')
    .replace(/<strong>/g, '<strong class="font-bold text-gray-800">')
    .replace(/<code>/g, '<code class="font-mono text-sm p-1 rounded-lg bg-gray-900 text-gray-200">')
}
