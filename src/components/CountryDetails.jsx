import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  
  const { countries } = props;
  const country = countries.find(coun => coun.cca3 === props.match.params.id)

  const getBorderCountries = (cca3) => {
    const borderCountries = cca3.map(item => countries.find(coun => coun.cca3 === item))
    return borderCountries;
  }

  return (
    <div className="contry-detail">
      <h1>{ country.name.common } </h1>
      <table>
          <tr>
            <td className="detail-title">Capital</td>
            <td> { country.capital }</td>
          </tr>
          <tr>
            <td className="detail-title">Area</td>
            <td> { country.area } km²</td>
          </tr>
          <tr>
            <td className="detail-title">Borders</td>
            <td>{  getBorderCountries(country.borders).map(coun => {
              return <li className="border-list"><Link to={`/country/${coun.cca3}`} className="border-link">{coun.name.common}</Link></li>
            })}</td>
          </tr>
      </table>
      
      
    </div>
  )
}

export default CountryDetails;