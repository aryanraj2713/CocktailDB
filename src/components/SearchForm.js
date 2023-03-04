import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext( )
  const searchValue = React.useRef('')
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input type="text" id='name' ref={searchValue} onChange={(searchCocktail) => setSearchTerm(searchValue.current.value)}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
