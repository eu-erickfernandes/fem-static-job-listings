import { useJobsContext } from '../../common/context/JobsContext'
import JobItem from './JobItem'
import styles from './JobsList.module.css'

const JobsList = () => {
    const { filteredJobs } = useJobsContext()

    return (
        <ul className={ styles.jobsList }>
            {filteredJobs.jobs && filteredJobs.jobs.map((job) => (
                <JobItem 
                    key={ job.id }
                    job={ job }
                />
            ))}
        </ul>
    )
}

export default JobsList