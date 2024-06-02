import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avater from "./avater";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avater img="https://tse2.mm.bing.net/th?id=OIP.Wf9aBoOrgkH2Pl3p-8avKgHaEK&pid=Api&P=0&h=220" />

      {contacts.map(createCard)}
    </div>
  );
}

export default App;
