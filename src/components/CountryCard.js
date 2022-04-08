
const CountryCard = ({country, theme, setPage}) => {
    return (
        <div className="country-card" onClick={() => setPage(country.cca3)}>
            <div className="img-wrapper">
                <img src={country.flags.png} alt="" className="flag-image" />
            </div>
            <div className="country-stats">
                <h3>{country.name.common}</h3>
                <p>Population: <span>{country.population.toLocaleString()}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
            </div>

        </div>
    )
}

export default CountryCard