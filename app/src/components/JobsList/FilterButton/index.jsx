import { useState } from "react"
import { useJobsContext } from "../../../common/context/JobsContext"

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
        <button onClick={ handleClick }>{ category }: { value } --- { selected.toString() }</button>
    )
}

export default FilterButton