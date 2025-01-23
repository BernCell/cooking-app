import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [mealsData, setMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((res) => setMealsData(res.data.meals));
  }, [inputSearch]);

  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="meals-container">
        {/* si mealsData === true est une condition à mettre constamment 
        pour se prémunir contre le fait que mealsData est tjrs vide au début donc est false 
        si mealsData est existe on exécute le listage des recettes via le slice et le map suivant
        c'est une façon en React de faire de l'asynchrone*/}
        {mealsData && 
          mealsData
            .slice(0, 24)
            .map((meal) => <Card key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default App;
