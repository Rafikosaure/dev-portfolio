import '../Styles/theme.scss'
import Slideshow from '../Components/Slideshow'
import { Link } from 'react-router-dom'

function ShowProject({ currentDatas }) {

    return (
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
                    Consulter le code du projet
                </Link>
            )}                
        </div>
    )
}

export default ShowProject
