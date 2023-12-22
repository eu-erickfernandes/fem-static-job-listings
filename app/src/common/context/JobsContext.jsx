import { createContext, useContext, useEffect, useState } from "react";

export const JobsContext = createContext()

export const JobsProvider = ({ children }) => {
    const [filteredJobs, setFilteredJobs] = useState([])
    const [filters, setFilters] = useState([])

    const getData = () => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setFilteredJobs(data))
    }

    useEffect(() => {
        getData()
        applyFilters()
    }, [])


    const addFilter = (newFfilter) => {
        !filters.some((filter) => filter.value === newFfilter.value) ? setFilters([...filters, newFfilter]) : null
    }

    const removeFilter = (currentFilter) => {
        setFilters(filters.filter(filter => filter.value !== currentFilter.value))
    }

    const applyFilters = () => {
        
    }

    return (
        <JobsContext.Provider value={{ 
            filteredJobs,
            filters,
            addFilter,
            removeFilter, 
        }}>
            { children }
        </JobsContext.Provider>
    )
}

export const useJobsContext = () => {
    return useContext(JobsContext)
}