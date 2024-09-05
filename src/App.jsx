import Sidebar from "./components/ui/Sidebar"
import './index.css'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import ScoreData from './components/ScoreData';
import TrendingNews from './components/TrendingNews';



function App() {
  
  return (
    <div className="flex bg-page">
      <Sidebar />
      <div className="flex-1">
        <Avatar className='max-w-[732px] max-h-72 mt-12 ml-6 bg-cover object-cover'>
          <AvatarImage src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
