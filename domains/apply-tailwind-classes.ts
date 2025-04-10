export function applyTailwindClasses(html: string): string {
  // Ajouter les classes Tailwind nécessaires après parsing du Markdown
  return html
    .replace(/<h1>/g, '<h1 class="text-3xl font-bold mb-4">')
    .replace(/<h2>/g, '<h2 class="text-2xl font-semibold mb-4">')
    .replace(/<h3>/g, '<h3 class="text-xl font-semibold mb-4">')
    .replace(/<p>/g, '<p class="text-base text-gray-700 mb-4">')
    .replace(/<ul>/g, '<ul class="list-disc pl-5 mb-4">')
    .replace(/<ol>/g, '<ol class="list-decimal pl-5">')
    .replace(/<li>/g, '<li class="mb-4">')
    .replace(/<hr>/g, '<hr class="mb-4" />')
    .replace(/<a>/g, '<a class="text-blue-500 hover:text-blue-700">')
    .replace(/<strong>/g, '<strong class="font-bold">')
}
