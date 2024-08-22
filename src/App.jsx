import { useEffect } from "react"
import Sidebar from "./components/ui/Sidebar"
import './index.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ScoreData from './components/ScoreData';
import TrendingNews from './components/TrendingNews';
import CustomCard from './components/CustomCard';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"




function App() {

  const BASE_URL = "https://api.sportmonks.com/v3";
  const API_KEY = "KNK63t9NyL1x67TEeQf90vDp6QBbH2IKj0m9rpEc4LhqYXJuZMvPLYqlnPTS";
  const API_URL = `${BASE_URL}/football/fixtures/date/2022-07-24?api_token=${API_KEY}`;
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch(API_URL, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((result) => console.log(result))
    .catch((error) => console.error('There has been a problem with your fetch operation:', error));
  
  return (
    <div className="flex bg-bgColor_primary">
      <Sidebar />
      <div>
        <Avatar className='max-w-[732px] max-h-72 mt-12 ml-6 bg-cover object-cover'>
          <AvatarImage src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div>
          <ScoreData />

        </div>
      </div>
      <div className="mx-4 mt-12 w-[360px] rounded-[20px] bg-bgColor">
        <TrendingNews />
      </div>


    </div>
  )
}

export default App
