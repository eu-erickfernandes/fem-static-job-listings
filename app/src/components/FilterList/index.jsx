import { useJobsContext } from "../../common/context/JobsContext"
import styles from './FilterList.module.css'

const FilterList = () => {
    const { filters } = useJobsContext()

    return (
        <div className={ styles.filtersWrapper }>
            <div className={ styles.filtersContainer }>
                <ul className={ styles.fitlersList }>
                    {filters.map((filter) => (
                        <li key={ filter.value }>{ filter.value }</li>
                    ))}
                </ul>

                <button>Clear</button>
            </div>
        </div>
    )
}

export default FilterList 