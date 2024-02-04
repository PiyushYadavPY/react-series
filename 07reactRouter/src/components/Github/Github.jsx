import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-md">
      
      <div className="flex flex-col justify-center items-center">
        <img className="rounded-xl" src={data.avatar_url} alt="Git picture" width={300} />
      </div>
      <div>
        <p>Name: {data.name}</p>
        <p>Github Username: {data.login}</p>
        <p>Repos: {data.public_repos}</p>
        <p>Github followers: {data.followers}</p>
        <p>Github following : {data.following}</p>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/Piyushyadavpy");
  return res.json();
};
