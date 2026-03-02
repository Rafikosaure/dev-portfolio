import '../Styles/theme.scss'
import projectsData from '../Data/projects.json'
import ShowProject from '../Components/ShowProject'
import { useParams } from 'react-router'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '../Context/ThemeContext'
import { useEffect } from 'react'
import type { Project } from '../types'

const Projects = projectsData as Project[]


function ProjectPage() {
    const { projectId } = useParams<{ projectId: string }>()
    const currentDatas = Projects.find((project) => project.id === projectId)
    const { ref: myProject, inView: myProjectIsVisible } = useInView();
    const { colorElementMode, colorMainMode, getStoredTheme } = useTheme()

    useEffect(() => {
        getStoredTheme()
    }, [getStoredTheme])

    if (!currentDatas) {
        return (
            <div className={`${colorMainMode} portfolio-project-page`}>
                <p style={{ padding: '2rem' }}>Projet introuvable.</p>
            </div>
        )
    }

    return (
        <div className={`${colorMainMode} portfolio-project-page`}>
            {/* SECTION GRISE TITRE */}
            <div className={`section section-grise-project${colorElementMode} project-section`}>
                <div className={`section-grise-project-overlay${colorElementMode}`} />
                <a className={`portfolio-back portfolio-back-color${colorElementMode}`} href="/">
                    Retour
                </a>
                <div className="separateur" style={{ marginTop: '-12px' }} />
                <h1 className="portfolio">Portfolio</h1>
                <h2 className="portfolio">{currentDatas.title}</h2>
            </div>
            {/* SECTION CONTENU */}
            <div className='portfolio-project-content-wrapper'>
                <div ref={myProject} className={`${'portfolio-description-padding-top'} ${'section'} ${'reveal'} ${myProjectIsVisible ? 'reveal-visible' : ''}`}>
                <div className="texte-avec-ligne-verticale">
                    {currentDatas.description}
                    <br />
                    <br />
                    <u>Technologies utilisées</u> :{' '}
                    <b>{currentDatas.technologies}</b>
                </div>
                <ShowProject currentDatas={currentDatas} />
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
