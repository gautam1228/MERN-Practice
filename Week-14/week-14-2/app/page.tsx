import axios from "axios";

async function getUserDetails(){
  const response = await axios.get("http://localhost:3000/api/user");

  return response.data;

}

export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className=" p-8 border rounded-md w-65">
          <div>
            Name : {userDetails.name}
          </div>
          <div>
            Email : {userDetails.email}
          </div>
        </div>
      </div>
    </div>
  );
}
