import {
  siPython,
  siTypescript,
  siJavascript,
  siCplusplus,
  siReact,
  siNodedotjs,
  siExpress,
  siFastapi,
  siSocketdotio,
  siPostgresql,
  siPrisma,
  siSupabase,
  siGit,
  siGithub,
  siPostman,
} from "simple-icons";

export const iconMap = {
  python: siPython,
  typescript: siTypescript,
  javascript: siJavascript,
  cplusplus: siCplusplus,
  react: siReact,
  nodedotjs: siNodedotjs,
  express: siExpress,
  fastapi: siFastapi,
  socketdotio: siSocketdotio,
  postgresql: siPostgresql,
  prisma: siPrisma,
  supabase: siSupabase,
  git: siGit,
  github: siGithub,
  postman: siPostman,
};

// Some brand colors (GitHub's near-black, Express's pure black, etc.)
// are unreadable against our dark background. Instead of hardcoding
// exceptions per-icon, check the color's luminance and fall back to a
// light neutral whenever the true brand color would be too dark to see.
export function getIconColor(icon) {
  const hex = icon.hex;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance < 0.25 ? "var(--text-secondary)" : `#${hex}`;
}
