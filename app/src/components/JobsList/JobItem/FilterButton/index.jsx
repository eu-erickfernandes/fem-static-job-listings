import { useState } from "react"
import { useJobsContext } from "../../../../common/context/JobsContext"
import styles from './FilterButton.module.css'

const FilterButton = ({ category, value }) => {
    const [selected, setSelected] = useState(false)
    const { filters, addFilter, removeFilter } = useJobsContext()

    const handleClick = () => {
        const filter = {
            category: category,
            value: value
        }

        selected ? removeFilter(filter) : addFilter(filter)
        setSelected(!selected)
    }

    return (
        <button className={ styles.filterButton } onClick={ handleClick }>{ category }: { value } --- { selected.toString() }</button>
    )
}

export default FilterButton