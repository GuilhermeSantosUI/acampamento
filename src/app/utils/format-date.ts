export function formatDate(date: Date) {
  const utcDate = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
  );
  return utcDate.toLocaleDateString('pt-BR');
}
