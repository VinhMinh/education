const cleanPath = (path: string | undefined): string => {
  if (!path) return '';
  let cleaned = path;
  
  if (cleaned.startsWith('/')) {
      cleaned = cleaned.slice(1);
  }
  
  if (cleaned.endsWith('/')) {
      cleaned = cleaned.slice(0, -1);
  }
  
  return cleaned;
};

export default cleanPath;