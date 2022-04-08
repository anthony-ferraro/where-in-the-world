import './App.css';
import Header from './components/Header';
import FilterMenu from './components/FilterMenu';
import CountryList from './components/CountryList';
import { useState, useEffect } from 'react';
import CountryDetails from './components/CountryDetails';
function App() {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    region: "",
  })
  const [page, setPage] = useState("home");
  const fetchCountryData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all"
      ,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }}
    );
    const data = await res.json();
    setData(data.sort((a,b) => a.name.common.localeCompare(b.name.common)));
  }

  useEffect(() => {
    setCountries(data);
  },[data]);

  useEffect(() => {
    fetchCountryData();
    document.title = "Where in the World?";
    const script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/6c9570153d.js";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  },[])

  useEffect(() => {
    setCountries(data.filter((country) => {
      return country.name.common.toLowerCase().includes(filters.search.toLowerCase()) &&
        country.region.toLowerCase().includes(filters.region.toLowerCase());
    }));
  },[filters]);

  return (
    <>
    <Header theme={theme} handleThemeChange={handleThemeChange}></Header>
    <section className="container">
      { page==="home" ? <><FilterMenu theme={theme} filters={filters} setFilters={setFilters}></FilterMenu>
      <CountryList theme={theme} countries={countries} setPage={setPage}></CountryList></> : <CountryDetails setPage={setPage} theme={theme} country={countries.find((country) => country.cca3 === page)}></CountryDetails>}
    </section>
    </>
  );
}

export default App;
