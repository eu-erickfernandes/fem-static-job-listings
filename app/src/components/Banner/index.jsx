import styles from './Banner.module.css'
import bgHeaderDesktop from '../../assets/images/bg-header-desktop.svg'

const Banner = () => {
    return(
        <header className={ styles.header }>
            <img className={ styles.banner } src={ bgHeaderDesktop } alt="Banner" />
        </header>
    )
}

export default Banner