import React from 'react';
// import {gql} from "apollo-boost";
import gql from "graphql-tag";
import {useQuery} from 'react-apollo';
// import {useQuery} from "@apollo/client";
import Spinner from "../components/spinner/spinner.component";
import Card from "../components/card/card.component";
import RepoListComponent from "../components/repoList/repoList.component";
import ProfileCardComponent from "../components/profileCard/profileCard.component";
import './queryHandler.css';


const QueryHandler = (searchText) => {

    // const searchParam = JSON.stringify(searchText);

    // const searchText = useContext(ThemeContext);
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
    
    followers{
      totalCount
    }
    following{
      totalCount
    }
    twitterUsername
    websiteUrl
    repositories(last: 20, isFork: true) {
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
}
`
    const {loading, data, error} = useQuery(REPO_SEARCH, {
        variables: {userId:{searchText}}
    });

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
                <div className='displayResult' data-test='displayResult'>
                    <RepoListComponent
                        repos={data && data.user.repositories.nodes}
                    />
                    <ProfileCardComponent data={data}/>
                </div>
            </>
        )
    }
    // if(data) {
    //     return (
    //         <>
    //             <Card
    //                 data={data}
    //             />
    //         </>
    //     )
    // }
    return ""
}
export default QueryHandler;

//------------------------------------------------------//

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



//Second Query to load more repos.
//     const {} = useQuery(LOAD_MORE, {
//         variables: {after: data.user.repositories.pageInfo.endCursor},
//     });

