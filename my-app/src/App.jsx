import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {React, useState} from "react";
import Dropdowngenre from "./Dropdowngenre";
import Dropdownpages from "./Dropdownpages";
import TopNavigation from './TopNavigation';


function App() {
  const [selectedValueGenre, setSelectedValuegenre] = useState("");
  const [selectedValuePages, setSelectedValuePages] = useState("");
  const [formState,setFormState] = useState(false);

  // Fetch Data from MongoDB Database at the backend
  // The Score for database
  // [
  //   {
  //     _id: ObjectId("63ef8c595b256b8f17278224"),
  //     Score: 1,
  //     bookSelectedDetails: [ { Genre: 'Thriller', Pages: 100 } ]
  //   },
  //   {
  //     _id: ObjectId("63ef8c8f5b256b8f17278225"),
  //     Score: 2,
  //     BookSelectedDetails: [ { Genre: 'Thriller', Pages: 200 } ]
  //   }
  //   {
  //     _id: ObjectId("63ef8c8f5b256b8f17278225"),
  //     Score: 3,
  //     BookSelectedDetails: [ { Genre: 'Thriller', Pages: 300 } ]
  //   }
  //   {
  //     _id: ObjectId("63ef8c8f5b256b8f17278225"),
  //     Score: 4,
  //     BookSelectedDetails: [ { Genre: 'Horror', Pages: 100 } ]
  //   And So On and store all the scores in vector 1 array
  //   }
  // ]

  const vector1 = {
    label: 'Book Details',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    fill: false,
    borderColor: 'red'
  };

  //Vector 2 will contain the array of data of the option that user has selected 
  //Suppose user chooses Thriller genre and 100 pages the score will be 1 (refer the objects in the above comment) so the array will have 9 values of 1
  const vector2 = {
    label: 'User Details',
    data: [3,3,3,3,3,3,3,3,3],
    fill: false,
    borderColor: 'blue'
  };

  // Difference of the array elements can be done by doing vector2 - vector1 for all the corresponding elements.
  const difference = {
    label: 'Difference',
    data: [2,1,0,-1,-2,-3,-4,-5,-6],
    fill: false,
    borderColor: 'green'
  };

  //Pass the vector1 vector2 and difference object as datasets
  const data = {
    labels: ['0', '1', '2', '3', '4', '5'],
    datasets: [vector1, vector2, difference],
  };  

  const handleSelectChangegenre = (event) => {
    setSelectedValuegenre(event.target.value);
  };

  const handleSelectChangepages = (event) => {
    setSelectedValuePages(event.target.value);
  };
  
  const handleSubmit = () => {

    setFormState(true);

    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedValueGenre, selectedValuePages }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (formState) {
    return( 
    <div>
      <TopNavigation/>
      <div className='vector-div'>
        <Line data={data}/>
      </div>
    </div>
    );
  }
  else{
    return (
      <div className="App">
      <TopNavigation/>
      <form className="user-input-form" onSubmit={handleSubmit}>
        <label className="Label-one">What are the genre of books that you prefer reading?</label>
        <Dropdowngenre selectedValuegenre={selectedValueGenre} handleSelectChangegenre={handleSelectChangegenre} />
        <label className="Label-one">How many pages on average do you prefer in a book?</label>
        <Dropdownpages selectedValuePages={selectedValuePages} handleSelectChangepages={handleSelectChangepages}/>
        <button className="button" type="submit">Submit</button>
      </form>    
      </div>
    );
  }
}

export default App
