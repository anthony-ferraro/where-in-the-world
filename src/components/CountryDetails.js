import React from 'react'

const CountryDetails = ({theme, country, setPage}) => {
  return (
    <>
      <button className="back-button" onClick={() => setPage("home")}><i className="fa-solid fa-arrow-left-long"></i>Back</button>
      <div className="country-details">
        <div className="img-wrapper">
          <img src={country.flags.png} alt={`flag of ${country.name.common}`} className="flag-image" />
        </div>
        <div className="text-wrapper">
          <h3>{country.name.common}</h3>
          <div className="country-info">
            <div>
              <p>Native Name: <span>{country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</span></p>
              <p>Population: <span>{country.population.toLocaleString()}</span></p>
              <p>Region: <span>{country.region}</span></p>
              <p>Sub Region: <span>{country.subregion}</span></p>
              <p>Capital: <span>{country.capital}</span></p>
              <p>Demonym: <span>{`${country.demonyms.eng.m}`}</span></p>
            </div>
            <div>
              <p>Top Level Domain: <span>{country.tld[0]}</span></p>
              <p>Currencies: <span>{Object.keys(country.currencies).map((currency) => (country.currencies[currency].name)).join(", ")}</span></p>
              <p>Languages: <span>{Object.keys(country.languages).map((language) => (country.languages[language])).join(", ")}</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CountryDetails