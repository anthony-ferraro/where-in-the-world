import CountryCard from './CountryCard'
const CountryList = ({theme, countries, setPage}) => {
    return (
        <div className="country-list">
            {countries.map((country, index) => <CountryCard key={index} country={country} setPage={setPage}></CountryCard>)}
        </div>
    )
}

export default CountryList