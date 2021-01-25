import React, {useState} from 'react';
import SearchBar from "./components/searchbar/searchbar.component";
import Layout from "./components/Layout/layout.component";
import Navbar from "./components/navbar/navbar.component";
import './App.css';
import QueryHandler from "./graphql/queryHandler";



function App() {
    const [userSearch, setUserSearch] = useState('');
    const [searchText, setSearchText] = useState('');

  const handleSubmit=(e)=> {
        e.preventDefault();
        console.log("Form Submit Clicked", userSearch);
      setSearchText(userSearch);
    }
    const handleSearch = (e) => {
        setUserSearch(e.target.value);
    }

    const clearForm = (e)=> {
        e.preventDefault();
        setUserSearch("");
        console.log("Form Cleared", userSearch);
    }

    return (
        <div className="App">
            <Navbar />
            <Layout>
                <div className='title-div'>
                    <span><p className='title-1'>Git</p></span><span><p className='title-2'>Search</p></span>
                </div>
                <div className='searchdiv'>
                    <SearchBar
                        placeholder="Enter User Name"
                        onSubmit={handleSubmit}
                        onClear={clearForm}
                        handleChange={handleSearch}
                        value={userSearch}
                /></div>
            </Layout>
            <QueryHandler searchText={searchText}/>
}



        </div>
    );
}

export default App;
