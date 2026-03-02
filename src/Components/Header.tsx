import '../Styles/theme.scss'
import { useLocation } from 'react-router-dom'
import Profile1 from '../Images/profile.webp'
import { useTheme } from '../Context/ThemeContext'
import { useState, useEffect } from 'react'


function Header() {
    const location = useLocation()
    const [switchModeTitle, setSwitchModeTitle] = useState<string>('sombre')
    const { toggleTheme, colorElementMode, colorMainMode } = useTheme()

    useEffect(() => {
        if (colorMainMode === 'light') {
            setSwitchModeTitle('sombre')
        } else {
            setSwitchModeTitle('clair')
        }
    }, [colorMainMode])

    return (
        <div style={{ position: 'relative' }}>
            {location.pathname === '/' ? (
                <>
                <div className={`switch-mode${colorElementMode} switch-home`} title={`Passer en mode ${switchModeTitle}`} onClick={(e) => toggleTheme(e)}></div>
                <header className="cover">
                    <img
                        className="cover-profile"
                        alt="Profil de Rafik Ben Sadi"
                        src={Profile1}
                    />
                    <h1>Rafik Ben Sadi</h1>
                    <p className="cover-description">
                        Développeur Web | Stack MERN - SQL - Python
                    </p>
                    <div style={{ textAlign: 'center' }}>
                        <a
                            className={`contact-button contact-button-color${colorElementMode}`}
                            href="mailto:rafikbensadi@live.fr?subject=Contact%20depuis%20rafikbensadi.com"
                        >
                            ME CONTACTER
                        </a>
                    </div>
                    <div className={`cover-contact cover-contact-bar-color${colorElementMode}`}>
                        <p>
                            Ecrivez-moi à :
                        </p>
                        <p>
                            <a href="mailto:rafikbensadi@live.fr?subject=Contact%20depuis%20rafikbensadi.com">
                                rafikbensadi@live.fr
                            </a>
                        </p>
                    </div>
                </header>
                </>
            ) : (
                <>
                <div className={`switch-mode${colorElementMode} switch-portfolio`} title={`Passer en mode ${switchModeTitle}`} onClick={(e) => toggleTheme(e)}></div>
                <header className="portfolio-header">
                    <div
                        className="texte-avec-ligne-verticale"
                        style={{ marginLeft: 16, height: 45 }}
                    >
                        <p className="portfolio-header-title">Rafik Ben Sadi</p>
                    </div>
                    <a
                        className={`contact-button contact-button-color${colorElementMode} contact-button-portfolio`}
                        href="mailto:rafikbensadi@live.fr?subject=Contact%20depuis%20rafikbensadi.com"
                    >
                        ME CONTACTER
                    </a>
                </header>
                </>

            )}
        </div>
    )
}

export default Header
