import { useEffect, useState } from "react";
import "./Personajes.css";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { bringAllCharacters, bringAllUsers, userLogin } from "../../services/apiCalls";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"

export const Personajes = () => {
  const [characters, setCharacters] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate()

  // const inputHandler = (event) => {
  //    setUserData((prevState) => ({
  //      ...prevState,
  //      [event.target.name]: event.target.value,
  //    }));
  //  };

    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }

  const buttonHandler = () => {
   bringAllUsers()
   .then((res)=> {
    console.log(res)
   })
      
  };

  const loginHandler = (id) => {
    // const token = userLogin(id)
    // const decodedToken = jwtDecode(token)
    // localStorage.setItem('token', token)
    // localStorage.setItem('decoded', JSON.stringify(decodedToken))

    // console.log(token, 'aquí yace TOKEN')
    // console.log(decodedToken, 'esto es decoded token')
    console.log(id)
  }

  useEffect(() => {
    if (characters.length === 0) {
      bringAllCharacters().then((chars) => {
        setCharacters(chars);
      });
    }
  }, [characters]);

//   useEffect(() => {
//     characters.forEach((char) => {
//         if (inputValue === char.name) {
//             console.log(char)

//         }
//     })
//   }, [inputValue])


  return (
    <div className="miDiv">
      <CustomInput
        type={"text"}
        name={"name"}
        handler={inputHandler}
      ></CustomInput>

      <div className="apiCallButton" onClick={buttonHandler}>Users</div>
      <div className="apiCallButton" onClick={loginHandler}>Login</div>
      <div className="characterContainer">
        {characters.length > 0 ? (
          <>
            {characters.map((char) => {
              return (
                <>
                  <CharacterCard
                    key={char.id}
                    image={char.image}
                    name={char.name}
                  >
                  </CharacterCard>
                  <div className="apiCallButton" onClick={() => loginHandler(char.id)}>{char}</div>
                </>
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  );
};
