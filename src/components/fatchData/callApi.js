import { debounce } from "lodash";
import React, { useEffect, useState } from "react";

const FatchApi = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      });
  }, []);

  //   const handleChange = debounce((e) => {
  //     setText(e.target.value);
  //   }, 500);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <h4>Debouncing and Throttling</h4>
        <input type="text" value={text} onChange={(e) => handleChange(e)} />
        {text}
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      </>
    );
  }
};
export default FatchApi;
