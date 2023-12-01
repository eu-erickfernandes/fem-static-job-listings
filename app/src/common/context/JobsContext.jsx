import { createContext, useEffect, useState } from "react";

export const JobsContext = createContext()

export const JobsProvider = ({ children }) => {
    const [filters, setFilters] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([])

    const addFilter = (filter) => {
        setFilters([...filters, filter])
    }

    const removeFilter = (filter) => {
        
    }

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(response => response.json())
            .then(data => setFilteredJobs(data))
    }, [])

    return (
        <JobsContext.Provider value={{ filteredJobs, filters, addFilter, removeFilter }}>
            { children }
        </JobsContext.Provider>
    )
}