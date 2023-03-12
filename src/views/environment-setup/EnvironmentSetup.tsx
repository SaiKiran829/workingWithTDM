import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import "./EnvironmentSetup.scss";
import { it } from "node:test";




const EnvironmentSetup = () => {

  
  interface sample  {
    [key: string]: {
      name: string;
      password: string;
      profession: string;
      id: number;
    };
  }

  interface input {
    name: string;
    password: string;
    profession: string;
    id: number;
  }

  const sample1: input = {
    name:"saikiran" ,
    password:"hello",
    profession:"tech",
    id:4
  }
 
  const [apps,setApps] = useState<sample>({});

  // useEffect(() => {
  //   axios.post('http://localhost:3001/users',sample1)
  //   .then(response => {console.log(response.data); setApps(response.data);})
  // }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/applications')
    .then(response => setApps(response.data));
  },[])


  return (
    <div>
      <div className="container1">
      <h1>Application</h1>
      <br/>
      <div className="row">
        {Object.values(apps).map(item => (
        <div className="col">
        <Card key={item.id} className="card" interactive={true} elevation={Elevation.ONE}>
        <img className="buttonImg" src="https://static.vecteezy.com/system/resources/thumbnails/000/630/510/small/illust58-7378-01.jpg" alt=""></img>
        <img className="imgFile" src="https://img.freepik.com/free-vector/illustration-data-folder-icon_53876-6329.jpg" alt=""></img>
        <b>{item.name}</b>
        </Card> 
        </div>
      ))}
      </div> 
      </div>
      <div className="container2">
        <h1>Applications-:Environments</h1>
        <br/>
      <div className="row">
        {Object.values(apps).map(item => (
        <div className="col">
        <Card key={item.id} className="card" interactive={true} elevation={Elevation.ONE}>
        <img className="imgFile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjThfuOimYYC8E02lddzjPjhvCdOiNi0NyhA&usqp=CAU" alt="Girl in a jacket"/>
        <b>{item.name}</b>
        </Card> 
        </div>
      ))}
      </div> 
      </div>
    </div>
  );
};

export default EnvironmentSetup;
