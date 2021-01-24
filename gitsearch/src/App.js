import React, {useState} from 'react';
import SearchBar from "./components/searchbar/searchbar.component";
import CustomButton from "./components/button/button.component";
import Layout from "./components/Layout/layout.component";
import Card from "./components/card/card.component";
import ResultCard from "./components/resultcard/resultcard.component";
import './App.css';

function App() {

    const [avatarurl, setAvatarurl] = useState('avatarurl here');
    const [htmlurl, sethtmlurl] = useState('html url here');
    const [name, setName] = useState('Praveen');
    const [bio, setBio] = useState('Software');
    const [location, setLocation] = useState('Salt Lake City');

    return (
        <div className="App">
            <Layout>
                <div className='title'>
                    <strong>GitSearch</strong>
                </div>
                <h3>NavBar</h3>
                <SearchBar/>
                <CustomButton>Search</CustomButton>
                <CustomButton>Clear</CustomButton>
                <div className='cardsdiv'>
                  <span className='resultspan'>
                    <ResultCard/>
                  </span>
                    <span className='cardspan'>
                      <Card
                          avatarurl={avatarurl}
                          htmlurl={htmlurl}
                          name={name}
                          bio={bio}
                          location={location}
                      />
                    </span>
                </div>
            </Layout>
        </div>
    );
}

export default App;
