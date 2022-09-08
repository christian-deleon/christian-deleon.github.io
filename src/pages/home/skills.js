
const skills = [
  { name: "Terraform",  svgName: "terraform",   level: "Proficient" },
  { name: "Kubernetes", svgName: "k8s",         level: "Proficient" },
  { name: "Jenkins",    svgName: "jenkins",     level: "Proficient" },
  { name: "Prometheus", svgName: "prometheus",  level: "Proficient" },
  { name: "Docker",     svgName: "docker",      level: "Proficient" },
  { name: "RHEL",       svgName: "rhel",        level: "Proficient" },
  { name: "AWS",        svgName: "aws",         level: "Proficient" },
  { name: "Azure",      svgName: "azure",       level: "Intermediate" },
  { name: "GCP",        svgName: "gcp",         level: "Intermediate" },
  { name: "Python",     svgName: "python",      level: "Proficient" },
  { name: "Bash",       svgName: "bash",        level: "Proficient" },
  { name: "Git",        svgName: "git",         level: "Proficient" },
  { name: "MySQL",      svgName: "mysql",       level: "Proficient" },
  { name: "VS Code",    svgName: "vscode",      level: "Proficient" },
  { name: "JavaScript", svgName: "javascript",  level: "Intermediate" },
  { name: "TypeScript", svgName: "typescript",  level: "Intermediate" },
  { name: "React",      svgName: "react",       level: "Intermediate" },
  { name: "HTML 5",     svgName: "html-5",      level: "Proficient" },
  { name: "CSS 3",      svgName: "css3",        level: "Proficient" },
];

export function getSkills() {
  return skills;
}
