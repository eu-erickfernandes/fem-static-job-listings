import { useContext, useEffect, useState } from "react"
import { JobsContext } from "../../common/context/JobsContext"
import FilterButton from "./FilterButton"
import styles from './JobsList.module.css'
import JobItem from "./JobItem"

const JobsList = () => {
    const { filteredJobs } = useContext(JobsContext)

    return (
        <ul className={ styles.jobsList }>
            {filteredJobs.map(job => (
                // <li key={ job.id }>
                //     { job.position }

                //     <FilterButton 
                //         category='role'
                //         value={ job.role }
                //     />

                //     <FilterButton 
                //         category='level'
                //         value={ job.level }
                //     />

                //     {job.languages.map((language) => (
                //         <FilterButton
                //             key={ language }
                //             category='language'
                //             value={ language }
                //         />
                //     ))}

                //     {job.tools.map((tool) => (
                //         <FilterButton
                //             key={ tool }
                //             category='tool'
                //             value={ tool }
                //         />
                //     ))}
                // </li>

                <JobItem
                    key={ job.id }    
                    job={ job } 
                />
            ))}
        </ul>
    )
}

export default JobsList