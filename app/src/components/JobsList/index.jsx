import { useContext, useEffect, useState } from "react"
import { JobsContext } from "../../common/context/JobsContext"
import FilterButton from "./FilterButton"

const JobsList = () => {
    const { filteredJobs } = useContext(JobsContext)

    return (
        <ul>

            {filteredJobs.map(job => (
                <>
                    <br />
                    <li key={ job.id }>
                        { job.position }

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
                    </li>
                </>
            ))}
        </ul>
    )
}

export default JobsList