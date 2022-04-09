import './App.css';
import Header from './components/Header';
import FilterMenu from './components/FilterMenu';
import CountryList from './components/CountryList';
import { useState, useEffect } from 'react';
import CountryDetails from './components/CountryDetails';
function App() {
  const [theme, setTheme] = useState({
    name: "light",
    colors: {
      primary: "#ffffff",
      secondary: "#fafafa",
      text: "#111517",
    }
  });
  const handleThemeChange = () => {
    setTheme(theme.name === "light" ? 
    {name: "dark", colors: {primary: "#2B3844", secondary: "#202C36", text: "#ffffff"}} 
    : 
    {name: "light", colors: {primary: "#ffffff", secondary: "#fafafa", text: "#111517"}});
  }
  // useEffect(() => {
  //   console.log(theme.name);
  // },[theme])

  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    region: "",
  })
  const [page, setPage] = useState("home");
  const handlePageChange = (newPage) => {
    if(newPage!=="random") {
      setPage(newPage);
    }
    else {
      let randomCountry = data[Math.floor(Math.random() * data.length)];
      console.log(randomCountry);
      setPage(randomCountry.cca3);
    }

  }

  const getCountryNameByCCA3 = (cca3) => {
    //return the country that has the cca3 code
    return data.find(country => country.cca3 === cca3).name.common;
  }

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

  useEffect(() => { // on page loadfetch data, set title, and add fontawesome script on page 
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

  useEffect(() => { // on theme change update root element theme
    document.querySelector('html').style.backgroundColor = theme.colors.secondary;
  },[theme])

  useEffect(() => { // initialize countries after fetching data from API
    setCountries(data);
  },[data]);

  useEffect(() => {
    setCountries(data.filter((country) => {
      return country.name.common.toLowerCase().includes(filters.search.toLowerCase()) &&
        country.region.toLowerCase().includes(filters.region.toLowerCase());
    }));
  },[filters]);

  return (
    <>
    <Header theme={theme} handleThemeChange={handleThemeChange} handlePageChange={handlePageChange}></Header>
    <section className="container" style={{backgroundColor: theme.colors.secondary, color: theme.colors.text, transition: "background-color 0.1s linear, color 0.1s linear",}}>
      { page==="home" ? <><FilterMenu theme={theme} filters={filters} setFilters={setFilters}></FilterMenu>
      <CountryList theme={theme} countries={countries} handlePageChange={handlePageChange}></CountryList></> 
      : <CountryDetails getCountryNameByCCA3={getCountryNameByCCA3} handlePageChange={handlePageChange} theme={theme} country={data.find((country) => country.cca3 === page)} countries={countries}></CountryDetails>}
    </section>
    </>
  );
}

export default App;
