import React from 'react';
import './resultcard.styles.scss';

const ResultCard = () => {

    return (
        <div className='wrapper'>
            <table className='table'>
                <thead className='tablehead'>
                <tr>
                    <th></th>
                    <th>Repo</th>
                    <th>Created on</th>
                    <th>Updated</th>
                    <th>Stars</th>
                    <th>Forks</th>
                    <th>Followers</th>
                </tr>

                </thead>
                <tbody className='tbody'>
                <tr>
                    <td>1</td>
                    <td>clothing-app</td>
                    <td>03/26/2021</td>
                    <td>03/26/2021</td>
                    <td>Stars1</td>
                    <td>Forks1</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>clothing-app2</td>
                    <td>03/25/2021</td>
                    <td>03/26/2021</td>
                    <td>Stars2</td>
                    <td>Forks2</td>
                    <td>30</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultCard;