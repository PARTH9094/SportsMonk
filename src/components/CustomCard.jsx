
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const CustomCard = () => {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <img 
          src="https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          alt="Sports players kneeling on the field"
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        <CardTitle className="mt-4">Results and scores from the Premier League....!!</CardTitle>
        <CardDescription>5 hours ago</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CustomCard;
