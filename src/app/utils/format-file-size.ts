export function formatFileSize(size: number): string {
  const i: number =
    size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));

  return (
    +(size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  );
}
