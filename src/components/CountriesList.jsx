import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ( {countries} ) => {
  return (
    <div className="country-list">
      <ul style={{overflow:"scroll", maxHeight:"90vh"}}>
        { countries.map(country => {
          return <li className="list-item"> <Link to={`/country/${country.cca3}`}> {country.flag}  {country.name.common} </Link></li>
        })}
      </ul>
    </div>
  )
}

export default CountriesList;