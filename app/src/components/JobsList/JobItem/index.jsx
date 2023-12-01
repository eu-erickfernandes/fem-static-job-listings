import FilterButton from "../FilterButton"

const JobItem = ({ job }) => {
    return (
        <li>
            <img src={ job.logo } alt="" />

            <div>
                <h2>{ job.company }</h2>

                <div>
                    {job.new &&
                        <span>NEW</span>
                    }

                    {job.featured &&
                        <span>FEATURED</span>
                    }
                </div>
            </div>

            <h3>{ job.position }</h3>

            <div>
                <span>{ job.postedAt }</span>
                <span>{ job.contract }</span>
                <span>{ job.location }</span>
            </div>

            <hr />

            <div>
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
            </div>
        </li>
    )
}

export default JobItem