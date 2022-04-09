import CountryCard from './CountryCard'
const CountryList = ({theme, countries, handlePageChange}) => {
    return (
        <div className="country-list" style={{transition: "background-color 0.1s linear, color 0.1s linear", backgroundColor: theme.colors.secondary, color: theme.colors.text}}>
            {countries.map((country, index) => <CountryCard key={index} country={country} theme={theme} handlePageChange={handlePageChange}></CountryCard>)}
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
        </div>
    )
}

export default CountryList