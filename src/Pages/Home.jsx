import '../Styles/theme.scss'
import Profile2 from '../Images/profile2.webp'
import LinkedIn from '../Images/linkedin.svg'
import CV_Icon from '../Images/cv.png'
import CV_OnlineIcon from '../Images/cv_online.png'
import GithubIcon from '../Images/github.svg'
import CV_File from '../CV/CV_BenSadi_Rafik.pdf'
import Card from '../Components/Card'
import projects from '../Data/projects.json'
import skills from '../Data/skills.json'
import SkillsList from '../Components/SkillsList'
import textProfile from '../Data/profileText'
import { useTypingEffect } from '../Hooks/Typing-effect'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '../Context/ThemeContext'
import { useEffect } from 'react'


function Home() {

    const { ref: revealCitation, inView: myCitationIsVisible } = useInView();
    const { ref: myPortfolio, inView: myPortfolioIsVisible } = useInView();
    const text = `"Un bon programmeur est quelqu’un qui regarde toujours des deux côtés avant de traverser une rue à sens unique." - Doug Linder, historien et développeur`
    const citation = useTypingEffect(text, 30)
    const { colorMainMode, colorElementMode, getStoredTheme } = useTheme()


    useEffect(() => {
        getStoredTheme()
    }, [getStoredTheme])


    return (
        <div>
            {/* COUVERTURE */}

            <main className={colorMainMode}>
                {/* SECTION GRISE 1 */}
                <div className={`section section-grise1${colorElementMode}`}>
                    <div className={`section-grise1-overlay${colorElementMode}`} />
                    <div className="separateur" />
                    <p>
                        Je développe votre <b>projet de site WEB</b>
                        <br />
                        de A à Z
                    </p>
                </div>
                {/* SECTION BLANCHE 1 */}
                <div className='section section-blanche'>
                    <h2>À propos de moi</h2>
                    <img
                        src={Profile2}
                        alt="Rafik Ben Sadi en train de travailler"
                        className='col-contenu image-shadow'
                    />
                    <div className="col-contenu float-right">
                        <div className="texte-avec-ligne-verticale">
                            {textProfile}
                            <div className='div-presentation-links'>
                                <Link className='presentation-link' to="https://www.linkedin.com/in/rafikbensadi" target="_blank"
                                rel="noopener noreferrer"><img className='list-icon' src={LinkedIn} alt='Icone LinkedIn'/>Consulter mon profil LinkedIn</Link>
                                <Link className='presentation-link' to="https://github.com/Rafikosaure" target="_blank"><img className='list-icon' src={GithubIcon} alt="Icone Github" />Consulter mon compte Github</Link>
                                <a className='presentation-link' target='_blank' rel='noopener noreferrer' href={CV_File}><img className='list-icon' src={CV_Icon} alt='Icone CV'/>Consulter mon Curriculum Vitae (PDF)</a>
                                <Link className='presentation-link' to="https://bold.pro/my/rafikbensadi" target="_blank"><img className='list-icon' src={CV_OnlineIcon} alt="Icone CV en ligne" />Consulter mon CV détaillé en ligne</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* SECTION GRISE 2 */}
                <div className={`section section-grise2${colorElementMode}`}>
                    <div className={`section-grise2-overlay${colorElementMode}`} />
                    <div ref={revealCitation} className={`${'div-citation'} ${'reveal-text'} ${myCitationIsVisible ? 'reveal-text-visible': ''}`}>
                        {citation}
                    </div>
                </div>
                
                {/* SECTION BLANCHE 2 */}
                <div className="section section-top">

                    <h2 className='div-competences-main-title'>Mes Compétences</h2>

                    <SkillsList data={skills[0]} animDirection='reverse' />
                    <SkillsList data={skills[1]} animDirection='normal' />
                    <SkillsList data={skills[2]} animDirection='reverse' />
                    <SkillsList data={skills[3]} animDirection='normal' />
                    <SkillsList data={skills[4]} animDirection='reverse' />
                    <SkillsList data={skills[5]} animDirection='normal' />
                    <SkillsList data={skills[6]} animDirection='reverse' />
                </div>
                
                {/* SECTION GRISE 3 */}
                <div ref={myPortfolio} className={`section section-grise3${colorElementMode} section-top`}>
                    <div className={`section-grise3-overlay${colorElementMode}`} />
                    <div className={`${'reveal'} ${myPortfolioIsVisible ? 'reveal-visible' : ''}`}>
                        <h2 id='portfolio'>Portfolio</h2>
                        <div className="projects-cardslist">
                        {projects.map((project) => (
                            <Card key={`${project.id}`} project={project} />
                        ))}
                        </div>
                    </div>
                    
                </div>
                <div className={`linear-gradient${colorElementMode} linear-gradient-height`}></div>
            </main>
        </div>
    )
}

export default Home
