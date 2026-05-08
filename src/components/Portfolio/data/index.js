import { navData } from "./nav";
import { heroData } from "./hero";
import { aboutData } from "./about";
import { metricsData } from "./metrics";
import { specialtiesData } from "./specialties";
import { experienceData } from "./experience";
import { skillsData } from "./skills";
import { projectsData } from "./projects";
import { contactData } from "./contact";

export const getContent = (lang) => ({
  nav: navData[lang],
  hero: heroData[lang],
  about: aboutData[lang],
  metrics: metricsData[lang],
  specialties: specialtiesData[lang],
  experience: experienceData[lang],
  skills: skillsData[lang],
  projects: projectsData[lang],
  contact: contactData[lang],
});
