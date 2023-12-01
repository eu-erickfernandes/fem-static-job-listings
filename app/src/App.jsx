import { useState } from 'react'
import Banner from './components/Banner'
import JobsList from './components/JobsList'
import { JobsProvider } from './common/context/JobsContext'
import FilterList from './components/FilterList'

function App() {
  return (
    <>
      <Banner />
      <JobsProvider>
        <FilterList />
        <JobsList />
      </JobsProvider>
    </>
  )
}

export default App
