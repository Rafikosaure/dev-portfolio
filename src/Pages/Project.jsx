import '../Styles/theme.scss'
import Projects from '../Data/projects.json'
import Slideshow from '../Components/Slideshow'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '../Context/ThemeContext'
import { useEffect } from 'react'


function Project() {
    const { projectId } = useParams()
    const currentDatas = Projects.find((project) => project.id === projectId)
    const { ref: myProject, inView: myProjectIsVisible } = useInView();
    const { colorElementMode, colorMainMode, getStoredTheme } = useTheme()

    useEffect(() => {
        getStoredTheme()
    }, [getStoredTheme])


    return (
        <div className={`${colorMainMode}`}>
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
                <div style={{ textAlign: 'center', marginTop: 30 }}>
                    {currentDatas.urlSite !== "#" ? (
                        <div>
                            <Link
                                to={currentDatas.urlSite}
                                target="_blank"
                                rel="noopener noreferrer"
                                title='Visiter le site'
                            >
                                <img
                                    className="portfolio image-bordered image-shadow"
                                    alt="Couverture de projet"
                                    src={`/${currentDatas.cover}`}
                                />
                            </Link>
                            <Link
                                className='projects-fontsize'
                                style={{ display: 'block', marginTop: 8 }}
                                to={currentDatas.urlSite}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visiter le site
                            </Link>
                        </div>
                    ) : (
                        <div className='div-slideshow'>
                            <Slideshow currentDatas={currentDatas} />
                        </div>
                    )}
                    {currentDatas.urlRepo !== "#" && (
                        <Link
                            className='projects-fontsize'
                            style={{ display: 'block', marginTop: 8 }}
                            to={currentDatas.urlRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Consulter le code du projet sur Github
                        </Link>
                    )}
                    
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Project
