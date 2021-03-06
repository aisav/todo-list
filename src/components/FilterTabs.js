import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../store/actions'

const FilterTabs = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ARCHIVE}>
      Archived
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default FilterTabs
