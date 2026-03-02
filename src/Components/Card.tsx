import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '../Context/ThemeContext';
import '../Styles/theme.scss'
import type { Project } from '../types'


interface CardProps {
    project: Pick<Project, 'id' | 'shortTitle' | 'cover'>
}

function Card({ project }: CardProps) {
    const { ref: myCard, inView: myCardIsVisible } = useInView();
    const { colorElementMode } = useTheme()


    return (
        <table ref={myCard} className={`${"col-portfolio reveal"} ${myCardIsVisible ? 'reveal-visible' : ''}`} style={{ display: 'inline-flex' }}>
            <tbody>
                <tr>
                    <td>
                        <div className={`barre-verticale barre-verticale-color${colorElementMode}`} />
                    </td>
                    <td style={{ width: '100%' }}>
                        <Link to={`/project/${project.id}`} className='card-link'>
                            <img
                                className="image-bordered image-shadow"
                                style={{ width: '100%' }}
                                alt="Couverture du projet"
                                src={project.cover}
                                title='Consulter le projet'
                            />
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td />
                    <td align="center">
                        <Link to={`/project/${project.id}`}>
                            {project.shortTitle}
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Card
