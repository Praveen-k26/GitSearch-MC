import React, {useContext} from 'react';
import {gql} from "apollo-boost";
import {useQuery} from 'react-apollo';
import Spinner from "../components/spinner/spinner.component";
import ResultCard from "../components/resultcard/resultcard.component";
import Card from "../components/card/card.component";
import SearchBar from "../components/searchbar/searchbar.component";
import Test1 from "../components/test1/test1";
import { UserContext } from "../context/UserContext";
import Test2 from "../components/test2/test2";
import './queryHandler.css';


const QueryHandler = (searchText) => {

    // const searchParam = JSON.stringify(searchText);

    // const searchText = useContext(UserContext);
console.log('QueryHandler-----', searchText);
    console.log('QueryHandlerType-----', typeof searchText)

const REPO_SEARCH =
    gql`
query ($userId: String!){
  user(login: $userId) {
    login
    id
    bio
    avatarUrl
    company
    email
    location
    twitterUsername
    websiteUrl
    followers {
        totalCount
    }
    repositories(last: 100, isLocked: false isFork: true) {
      totalCount
      nodes {
        forkCount
        stargazerCount
        updatedAt
        createdAt
        description
        name
        url
        viewerPermission
        id
      }
      pageInfo{
        endCursor
      }
    }
  }
}`



//     const LOAD_MORE =
//         gql`
// query ($userId: String!){
//   user(login: $userId) {
//     id
//     bio
//     avatarUrl
//     company
//     email
//     location
//     twitterUsername
//     websiteUrl
//     followers {
//         totalCount
//     }
//     repositories(first: 10, isLocked: false isFork: true) {
//       totalCount
//       nodes {
//         forkCount
//         stargazerCount
//         updatedAt
//         createdAt
//         description
//         name
//         url
//         viewerPermission
//         id
//       }
//       pageInfo{
//         endCursor
//       }
//     }
//   }
// }
// `
    // const { loading, data, error } = useQuery(REPO_SEARCH, {
    //     variables: { userId:"Praveen-k26" },
    // });
    // console.log(useQuery(REPO_SEARCH))

//fetching the repos using useQuery and passing the searchParam dynamically

    const {loading, data, error} = useQuery(REPO_SEARCH, {
        variables: {userId:"Praveen-k26"}
    });

//Second Query to load more repos.
//     const {} = useQuery(LOAD_MORE, {
//         variables: {after: data.user.repositories.pageInfo.endCursor},
//     });

    //A spinner will be displayed if the status is loading.
    if(loading) {
        return <Spinner />
    }

    //An error message if something goes wrong.
    if(error) {
        return "ERROR!!---"
    }

    //if Data is available.
    if(data) {
        return (
            <>
                {/*<SearchBar query={REPO_SEARCH}/>*/}
                <div className='displayResult'>
                    <Test1
                        repos={data && data.user.repositories.nodes}
                    />
                    <Test2/>
                </div>
                {/*<ResultCard*/}
                {/*    totalCount={data && data.user.repositories.totalCount}*/}
                {/*    repos={data && data.user.repositories.nodes}*/}
                {/*    more={data.user.repositories.pageInfo.endCursor}*/}
                {/*    fetch={fetchMore}*/}
                {/*    // query = {LOAD_MORE}*/}
                {/*    data={data}*/}
                {/*/>*/}
                {/*<Card*/}
                {/*    name={data && data.user.displayName}*/}
                {/*    avatarurl={data && data.user.avatarUrl}*/}
                {/*    bio={data && data.user.bio}*/}
                {/*    email={data && data.user.email}*/}
                {/*    location={data && data.user.location}*/}
                {/*    followers={data && data.user.followers.totalCount}*/}
                {/*    twitter={data && data.user.twitterUsername}*/}
                {/*    website={data && data.user.websiteUrl}*/}
                {/*/>*/}
            </>
    )
    }
    if(data) {
        return (
            <>
                <Card
                    data={data}
                    // repos={data && data.user.repositories.nodes}
                    // name={data && data.user.displayName}
                    // avatarurl={data && data.user.avatarUrl}
                    // bio={data && data.user.bio}
                    // email={data && data.user.email}
                    // location={data && data.user.location}
                    // followers={data && data.user.followers.totalCount}
                    // twitter={data && data.user.twitterUsername}
                    // website={data && data.user.websiteUrl}
                />

            </>
        )
    }

    return ""


}


export default QueryHandler;