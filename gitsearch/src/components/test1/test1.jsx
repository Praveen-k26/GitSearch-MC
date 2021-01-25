import React from 'react';
import image from '../../nyc1.jpg';
import profilepic from '../../assets/brent_goose.jpg';
import './test1.css';
import CustomButton from "../button/button.component";
import QueryHandler from "../../graphql/queryHandler";


const Test1 = ({totalCount, data,repos, more,query, fetch,searchText,...otherProps}) => {

    return (

        // <div className='wrapper'>
        //
        //         return <>
        //             <div className="container">
        //                 <header className="header">
        //                     <img src={'data.user.avatarUrl'} alt="Praveen"/>
        //                     <h4>"Praveen-k26"</h4>
        //                 </header>
        //                 <p className="bio">Software Engineer</p>
        //                 <p className="email">praveen@koru.com</p>
        //                 <p className="website">www.google.com</p>
        //                 <p className="location">Salt Lake City</p>
        //                 <a href="/" className='a'>Follow</a>
        //                 <span><p>Followers: 20 </p></span>
        //                 <span><p>Following: 45</p></span>
        //             </div>
        //         </>
        //
        //     }
        // </div>
        <>
            {/*--------------------------------------------*/}
            {/*<div className='test-container'>*/}
            {searchText && <QueryHandler searchParam={searchText} />}

                <div className="card-wrapper">
                    <div className="card">
                        <table className='table'>
                            <thead className='tablehead'>
                            <tr>
                                <th>#</th>
                                <th>Repo</th>
                                <th>Created on</th>
                                <th>Updated</th>
                                <th>Stars</th>
                                <th>Forks</th>
                            </tr>
                            </thead>
                            <tbody className='tbody'>
                            {repos && repos.length > 0 ? repos.map((repo,index) => {
                                return <tr key={repo.id}>
                                    <td>{index +1}</td>
                                    <td>{repo.name}</td>
                                    <td>{repo.createdAt}</td>
                                    <td>{repo.UpdatedAt}</td>
                                    <td>{repo.stargazerCount}</td>
                                    <td>{repo.forkCount}</td>
                                </tr>
                            }) : ""}

                            </tbody>
                        </table>
                        {/*<img src={image} alt='card-background' className='card-img'/>*/}
                        {/*/!*<img src='https://ctrlq.org/google/photos/' alt='card-background' className='card-img' />*!/*/}
                        {/*<img src={profilepic} alt="profile image" className="profile-img"/>*/}
                        {/*<h1>Praveen Koru</h1>*/}
                        {/*<p className='job-title'>Software Developer</p>*/}
                        {/*<p className='about'>BIO HERE</p>*/}
                        {/*<a href="#" className='btn'>Contact</a>*/}
                        {/*<ul className='social-media'>*/}
                        {/*    <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>*/}
                        {/*</ul>*/}

                    </div>
                </div>

            {/*</div>*/}
        </>
    )
}

export default Test1;
/*
import React from 'react';
import './resultcard.styles.scss';
import CustomButton from "../button/button.component";
import {useQuery} from 'react-apollo';
import QueryHandler from "../../graphql/queryHandler";


const ResultCard = ({totalCount, data,repos, more,query, fetch,searchText,...otherProps}) => {

    // const fetchMore = fetch({
    //     variables: {after: more}
    // })
    // {
    //     console.log('---------->',useQuery(query));
    // }

    return (
        <div className='wrapper'>
            {searchText && <QueryHandler searchParam={searchText} />}

            {
                repos && repos.length > 0 ?
                    <>
                        <table className='table'>
                            <thead className='tablehead'>
                            <tr>
                                <th>#</th>
                                <th>Repo</th>
                                <th>Created on</th>
                                <th>Updated</th>
                                <th>Stars</th>
                                <th>Forks</th>
                            </tr>
                            </thead>
                            <tbody className='tbody'>
                            {repos && repos.length > 0 ? repos.map((repo,index) => {
                                return <tr key={repo.id}>
                                    <td>{index +1}</td>
                                    <td>{repo.name}</td>
                                    <td>{repo.createdAt}</td>
                                    <td>{repo.UpdatedAt}</td>
                                    <td>{repo.stargazerCount}</td>
                                    <td>{repo.forkCount}</td>
                                </tr>
                            }) : ""}
                            </tbody>
                        </table>

                    </> : "No Repos Found!!"
            }
            {totalCount >5 ?
                ( <CustomButton
                    onClick={()=>console.log('Load More Repos')}
                >
                    More
                </CustomButton> ): ""
            }

        </div>
    )
}

export default ResultCard;
 */