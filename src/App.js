import "./App.css";
import { React, useEffect, useState } from "react";
import News from "./components/News/News.jsx";
import { Grid } from "@material-ui/core";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=Apple&from=2021-09-09&sortBy=popularity&apiKey=c69bf7b10fbf4b17a41b605900c20f54`;
    axios(url).then((data) => setArticles(data.data.articles));
  }, []);
  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {articles.map((article) => (
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <News article={article}></News>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default App;
