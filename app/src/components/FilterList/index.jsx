import { useContext } from "react"
import { JobsContext } from "../../common/context/JobsContext"

const FilterList = () => {
    const { filters, setFilters } = useContext(JobsContext)

    return (
        <ul>
            {filters.map((filter) => (
                <li>{ filter.value }</li>
            ))}
        </ul>
    )
}

export default FilterList 