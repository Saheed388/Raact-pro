import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avater from "./avater";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avater img="https://tse2.mm.bing.net/th?id=OIP.Wf9aBoOrgkH2Pl3p-8avKgHaEK&pid=Api&P=0&h=220" />
      
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        alt={contacts[0].alt}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        alt={contacts[1].alt}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        alt={contacts[2].alt}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
