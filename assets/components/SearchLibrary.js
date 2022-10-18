import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonSecondary from "./UI components/ButtonSecondary";

const SearchLibrary = ({ bookAuthor, bookTitle }) => {
  const [result, setResult] = useState([]);

  const search = `${bookTitle.split(" ").join("-")}&type=Author-AND-${bookAuthor
    .split(" ")
    .join("-")}&type=Title&filter[]=format:0/Book/`;

  useState(() => {
    console.log("Searching for", search);
    axios.get(`https://api.finna.fi/v1/search?lookfor=${search}`).then(res => {
      console.log(res.data);
      setResult(res.data);
    });
  }, []);
  if (result.records) {
    return (
      <div>
        <h2>Can't decide? Check if your local library has this book!</h2>
        <h3>Libraries:</h3>
        <ul className='list-group'>
          {result?.records?.map(record => (
            <li
              key={record.id}
              className='list-group-item'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>
                {record.buildings[0].translated} (
                {record.languages[0] ?? "language is not specified"})
              </span>
              <ButtonSecondary>
                <a
                  href={`https://www.finna.fi/Record/${record.id}`}
                  target='_blank'
                >
                  Book from a library
                </a>
              </ButtonSecondary>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default SearchLibrary;
