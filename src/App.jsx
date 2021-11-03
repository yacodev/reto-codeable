import { useState } from "react";
import { Header } from "./Components/Header";
import {Button} from "./Components/Button"
import {View} from "./Components/View";
import iconHome from "./static/icon/iconHome.png";
import iconPlus from "./static/icon/iconPlus.png";
import iconClock from "./static/icon/iconClock.png";
import iconDollar from "./static/icon/iconDollar.png"
import getData from "./service/get_data";

const URL_PRIMARY = "https://5aa9487a4cf36300144e961d.mockapi.io/api/v1/properties/";
const URL_SECUNDARY = "https://5aa9487a4cf36300144e961d.mockapi.io/api/v1/properties_alternative/"

function App() {
  let [id, setId] = useState(0);
  let[value,setValue]=useState(0)

  function incrementId(){
    id+=1;
    setId(id)
  }

  async function updateValue(){
    let answer=await getData(`${URL_PRIMARY}${id}`)
    if(!answer.value){
      answer = await getData(`${URL_SECUNDARY}${id}`)
    }
    setValue(answer.value);
  }

  return (
    <>
      <Header
        icon={iconHome}
        text="Estimated Home Value"
      />

      <Button onClick={(e)=>incrementId()}
        icon={iconPlus}
        text="Increment property"
        details="Current property id:"
        id={id}
      />
      <Button onClick={(e)=>updateValue()}
        icon={iconClock}
        text="Update estimated value throught API"
      />
      <View
        icon={iconDollar}
        text="Estimated value: $"
        value={value}
      />
    </>
  );
}

export default App;
