import { useContext, useState } from "react"
import { JobsContext } from "../../../common/context/JobsContext"

const FilterButton = ({ category, value }) => {
    const [selected, setSelected] = useState(false)
    const { filters, addFilter, removeFilter } = useContext(JobsContext)

    const handleClick = () => {
        const filter = {
            category: category,
            value: value
        }

        selected ? removeFilter(filter) : addFilter(filter)
        setSelected(!selected)
    }

    return (
        <button onClick={ handleClick }>{ category }: { value }</button>
    )
}

export default FilterButton