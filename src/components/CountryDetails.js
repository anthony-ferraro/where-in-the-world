import React from 'react'

const CountryDetails = ({theme, country, getCountryNameByCCA3, handlePageChange}) => {
  return (
    <div className="details-wrapper">
      <button style={{transition: "background-color 0.1s linear, color 0.1s linear", backgroundColor: theme.colors.primary, color: theme.colors.text}} className="back-button" onClick={() => handlePageChange("home")}><i className="fa-solid fa-arrow-left-long"></i>Back</button>
      <div className="country-details">
        <div className="img-wrapper">
          <img src={country.flags.png} alt={`flag of ${country.name.common}`} className="flag-image" />
        </div>
        <div className="text-wrapper">
          <h3>{country.name.common}</h3>
          <div className="country-info">
            <div>
              {"nativeName" in country.name && <p>Native Name: <span>{country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</span></p>}
              {"population" in country && <p>Population: <span>{country.population.toLocaleString()}</span></p>}
              {"region" in country && <p>Region: <span>{country.region}</span></p>}
              {"subregion" in country && <p>Sub Region: <span>{country.subregion}</span></p>}
              {"capital" in country && <p>Capital: <span>{country.capital}</span></p>}
              {"demonyms" in country && <p>Demonym: <span>{`${country.demonyms.eng.m}`}</span></p>}
            </div>
            <div>
              {"tld" in country && <p>Top Level Domain: <span>{country.tld[0]}</span></p>}
              {"currencies" in country && <p>Currencies: <span>{Object.keys(country.currencies).map((currency) => (country.currencies[currency].name)).join(", ")}</span></p>}
              {"languages" in country && <p>Languages: <span>{Object.keys(country.languages).map((language) => (country.languages[language])).join(", ")}</span></p>}
            </div>
          </div>
          {"borders" in country && <div className="bordering">
                <p>Border Countries: </p>{country.borders.map((border, index) => <span key={index} onClick={() => handlePageChange(border)}>{getCountryNameByCCA3(border)}</span>)}
          </div>}
        </div>
      </div>
    </div>
  )
}

export default CountryDetails