/**
 * Components
 */
import ProjectCard from "./ProjectCard";
/**
 * Images
 */
import cover from "../images/hero-banner.png"

const works = [
  {
    imgSrc: cover,
    title: 'Project name',
    tags: ['API', 'MVC', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: cover,
    title: 'Project name',
    tags: ['API', 'SPA'],
    projectLink: ''
  },
  {
    imgSrc: cover,
    title: 'Project name',
    tags: ['Development', 'API'],
    projectLink: ''
  },
  {
    imgSrc: cover,
    title: 'Project name',
    tags: ['Web-design', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: cover,
    title: 'Project name',
    tags: ['eCommerce', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: cover,
    title: 'Project name',
    tags: ['Web-design', 'Development'],
    projectLink: ''
  },
];

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({imgSrc, title, tags, projectLink}, key) => (
                        <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Work