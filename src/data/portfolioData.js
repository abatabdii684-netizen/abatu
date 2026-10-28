// Edit this file to update the content of the whole site.

export const profile = {
  name: 'Abatu Abdi',
  brand: 'Abatu.dev',
  title: 'IT Student & Web Developer',
  roles: 'IT Student | Web Developer | Software Developer',
  university: 'Haramaya University',
  country: 'Ethiopia',
  email: 'abatabdii684@gmail.com',
  github: 'https://github.com/abatabdii684-netizen',
  linkedin: '', // Add a verified LinkedIn URL to show it in Contact
  image: '', // e.g. '/images/portrait.jpg' (put the file in public/images). Empty = "AA" initials
  tagline: 'IT student building useful software, one project at a time.',
  heroText:
    'I am passionate about web development, software engineering, and technology, and I enjoy turning real-world problems into working applications.',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    "Hello! I'm Abatu Abdi, a fourth-year Information Technology student at Haramaya University, Ethiopia.",
    'I am passionate about software development, web applications, database management, and solving real-world problems through technology.',
    'I have worked on projects including the Samasenbet Hospital Management System and GraduateConnect Ethiopia, a job and internship matching platform.',
    'My goal is to continue improving my technical skills, build useful software solutions, and grow as a professional IT developer.',
    'My interests include web development, software engineering, database systems, mobile application development, and related fields of information technology.',
    'I am currently developing projects, gaining practical experience, and expanding my programming skills.',
  ],
  summary:
    'Fourth-year IT student at Haramaya University with a focus on application development and hands-on experience building web projects.',
  highlights: [
    { icon: 'GraduationCap', title: 'Education', text: 'Fourth-year IT student, Haramaya University' },
    { icon: 'Code2', title: 'Focus', text: 'Web and full-stack application development' },
    { icon: 'FolderGit2', title: 'Experience', text: 'Practical project work in healthcare and jobs platforms' },
  ],
}

export const skillCategories = [
  { icon: 'Layout', title: 'Frontend Development', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'] },
  { icon: 'Server', title: 'Backend Development', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { icon: 'Database', title: 'Database Management', items: ['MySQL', 'Prisma ORM'] },
  { icon: 'Wrench', title: 'Development Tools', items: ['Git', 'GitHub', 'VS Code', 'Vite'] },
  {
    icon: 'Lightbulb',
    title: 'Other Interests',
    items: ['Software engineering', 'Mobile application development', 'System analysis', 'Database design'],
  },
]

export const projects = [
  {
    title: 'Samasenbet Hospital Management System',
    description:
      'A web-based hospital management application designed to organize hospital workflows, including patient registration, appointments, laboratory services, pharmacy, billing, admissions, and reporting.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'Prisma ORM'],
    icon: 'HeartPulse',
    image: '',
    imageAlt: '',
    repo: 'https://github.com/abatabdii684-netizen/samasenbet-hms',
    repoLabel: 'View Source Code',
  },
  {
    title: 'GraduateConnect Ethiopia',
    description:
      'A job and internship matching platform designed to connect graduates with employment opportunities and help employers discover potential candidates.',
    // Stack not yet verified from project files. Add technologies once confirmed.
    tech: [],
    icon: 'Briefcase',
    image: '',
    imageAlt: '',
    repo: '', // Add the verified repository URL to show a source-code button
    repoLabel: 'View Source Code',
  },
]

export const education = {
  institution: 'Haramaya University',
  field: 'Information Technology',
  level: 'Fourth-year student',
  country: 'Ethiopia',
}
