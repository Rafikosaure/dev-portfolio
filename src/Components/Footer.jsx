import '../Styles/theme.scss'
import Profile from '../Images/profile.webp'
import { useTheme } from '../Context/ThemeContext'


function Footer() {

    const { colorMainMode, colorElementMode } = useTheme()


    return (
        <div className={`iframe ${colorMainMode}`}>
            <div className="section">
                <div
                    className="separateur display-mobile"
                    style={{ marginBottom: 15 }}
                />
                <div className={`frame frame-mode${colorElementMode}`}>
                    <h2 className="frame-title">Parlons de votre projet</h2>
                    <table style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <td valign="top" align="center">
                                    <img
                                        alt="Profil de Rafik Ben Sadi"
                                        src={Profile}
                                    />
                                </td>
                                <td>
                                    <div
                                        className={`texte-avec-ligne-verticale ligne-verticale-color${colorElementMode}`}
                                        style={{ marginLeft: 20 }}
                                    >
                                        <p>
                                            Besoin de discuter de votre projet
                                            et obtenir l'avis d'un professionnel ?
                                            <br />
                                            N'hésitez pas à {' '}
                                            <a href="mailto:rafikbensadi@live.fr?subject=Contact%20depuis%20rafikbensadi.com">
                                                me contacter par email
                                            </a>{' '}
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Footer
