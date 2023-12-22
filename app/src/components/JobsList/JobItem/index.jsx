import FilterButton from "./FilterButton"
import styles from './JobItem.module.css'

const JobItem = ({ job }) => {
    return (
        <li className={ styles.jobItem }>
            <img className={ styles.job__logo } src={ job.logo } alt="" />

            <div className={ styles.job__header }>
                <h2 className={ styles.job__company }>{ job.company }</h2>

                <div className={ styles.job__tags }>
                    {job.new &&
                        <span className={ styles.tagNew }>NEW</span>
                    }

                    {job.featured &&
                        <span className={ styles.tagFeatured }>FEATURED</span>
                    }
                </div>
            </div>

            <h3 className={ styles.job__position }>{ job.position }</h3>

            <div className={ styles.job__info }>
                <span>{ job.postedAt }</span>
                <span>•</span>
                <span>{ job.contract }</span>
                <span>•</span>
                <span>{ job.location }</span>
            </div>

            <hr />

            <div className={ styles.job__filters }>
                <FilterButton 
                    category='role'
                    value={ job.role }
                />

                <FilterButton 
                    category='level'
                    value={ job.level }
                />

                {job.languages.map((language) => (
                    <FilterButton
                        key={ language }
                        category='language'
                        value={ language }
                    />
                ))}

                {job.tools.map((tool) => (
                    <FilterButton
                        key={ tool }
                        category='tool'
                        value={ tool }
                    />
                ))}
            </div>
        </li>
    )
}

export default JobItem