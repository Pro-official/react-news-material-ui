import "./App.css";
import { React, useEffect, useState } from "react";
import News from "./components/News/News";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=Apple&from=2021-09-09&sortBy=popularity&apiKey=c69bf7b10fbf4b17a41b605900c20f54`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {articles.map((article) => (
        <News article={article}></News>
      ))}
    </div>
  );
}

export default App;
