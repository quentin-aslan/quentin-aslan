export function applyTailwindClasses(html: string): string {
  return html
    .replace(/<h1>/g, '<h1 class="text-3xl font-bold mb-4">')
    .replace(/<h2>/g, '<h2 class="text-2xl font-semibold">')
    .replace(/<h3>/g, '<h3 class="text-xl font-semibold mb-4">')
    .replace(/<p>/g, '<p class="text-base text-gray-700 mb-4">')
    .replace(/<ul>/g, '<ul class="list-disc pl-5 mb-4">')
    .replace(/<ol>/g, '<ol class="list-decimal pl-5 mb-4">')
    .replace(/<li>/g, '<li class="mb-2">')
    .replace(/<hr>/g, '<hr class="my-8 border-gray-300" />')
    .replace(/<a /g, '<a class="text-blue-600 hover:underline" ')
    .replace(/<strong>/g, '<strong class="font-bold">')
    .replace(/<pre>/g, '<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">')
    .replace(/<code>/g, '<code class="font-mono">')
}
