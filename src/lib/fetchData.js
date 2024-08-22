
// const myHeaders = new Headers({
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//     "Authorization": "KNK63t9NyL1x67TEeQf90vDp6QBbH2IKj0m9rpEc4LhqYXJuZMvPLYqlnPTS"
// });

// const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow"
// };

// export const fetchFixtures = async () => {

//     const response = await fetch("https://api.sportmonks.com/v3/football/fixtures/date/2022-07-24", requestOptions)
//         .then((response) => response.text())
//         .then((result) => console.log(result))
//         .catch((error) => console.error(error));
// }









// export const fetchFixtures = async () => {
//     const url = 'https://api.sportmonks.com/v3/football/fixtures';

//     try {

//        fetch(url, {
//             method: "GET",
//             // redirect: "follow",
//             headers: {
//                 "Access-Control-Allow-Headers": "Content-Type",
//                 "Access-Control-Allow-Origin": "*",
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 "Authorization": "KNK63t9NyL1x67TEeQf90vDp6QBbH2IKj0m9rpEc4LhqYXJuZMvPLYqlnPTS"
//             },
//             mode: "no-cors",
//         }).then((response) => response.json()).then((result) => console.log(result));
//         // if (!response.ok) {
//         //     throw new Error(`Error: ${response.status} ${response.statusText}`);
//         // }
//         // const data = await response?.json();
//         // console.log(data);
//         // return data;
//         // console.log(response)
//     } catch (error) {
//         console.log('Error fetching fixtures:', error);
//         throw error;
//     }
// };
