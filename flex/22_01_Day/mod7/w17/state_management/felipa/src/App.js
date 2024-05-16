// Styles
import "./App.css";

// Libraries
import { useReducer, useState } from "react";

// Components
import Profile from "./Profile";
import Navbar from "./Navbar";
import Loading from "./components/Loading";
import { generateRandomHexCode } from "./helpers/helpers";
import { userReducer } from "./reducers/userReducer";

const defaultState = {
  loggedIn: true,
  loading: false,
  logo: "frog_profile.jpg",
  tags: [
    {
      id: "e930db",
      label: "green",
    },
    {
      id: "82492e",
      label: "hungry",
    },
    {
      id: "cd82dc",
      label: "happy",
    },
  ],
  name: "Felipa",
  description:
    "Felipa is a friendly tree frog who enjoys spending her days sleeping and her nights chasing mosquitos for a delicious meal.",
};

function App() {
  // const [user, setUser] = useState(defaultState);
  const [user, dispatch] = useReducer(userReducer, defaultState)

  // const login = () => {
  //   const newUser = {
  //     loggedIn: true,
  //     loading: false,
  //     logo: "frog_profile.jpg",
  //     tags: [
  //       {
  //         id: "e930db",
  //         label: "green",
  //       },
  //       {
  //         id: "82492e",
  //         label: "hungry",
  //       },
  //       {
  //         id: "cd82dc",
  //         label: "happy",
  //       },
  //     ],
  //     name: "Felipa",
  //     description:
  //       "Felipa is a friendly tree frog who enjoys spending her days sleeping and her nights chasing mosquitos for a delicious meal.",
  //   };
  //   setUser(newUser);
  // }

  // const logout = () => {
  //   const newUser = {...user, loggedIn: false}
  //   // const newUser = Object.assign({}, user, { loggedIn: false })
  //   setUser(newUser)
  // }

  // const updateName = (name) => {
  //   const newUser = {...user, name}
  //   setUser(newUser)
  // }

  // const updateDescription = (description) => {
  //   const newUser = {...user, description}
  //   setUser(newUser)
  // }

  // const addTag = (tag) => {
  //   const newTags = [...user.tags]
  //   const newId = generateRandomHexCode();
  //   newTags.push({
  //     id: newId,
  //     label: tag
  //   });
  //   setUser({ ...user, tags: newTags})
  // }

  // const removeTag = (id) => {
  //   console.log(id)
  //   const newTags = [...user.tags]
  //   const tagIndex = newTags.findIndex((tag) => tag.id === id)
  //   if ( tagIndex >= 0) {
  //     newTags.splice(tagIndex, 1);
  //   }
  //   setUser({...user, tags: newTags});
  // }

  return (
    <div>
      <Navbar loggedIn={user.loggedIn} onLogin={()=> dispatch({type: "LOGIN"})} onLogout={() => dispatch({type: "LOGOUT"})} username={user.name} />
      <main>
        {user.loading ? (
          <Loading />
        ) : (
          <>
            {user.loggedIn ? (
              <Profile
                logo={user.logo}
                alt={`Profile picture for ${user.name}`}
                name={user.name}
                description={user.description}
                tags={user.tags}
                onNameChange={(name) => dispatch({type: "UPDATE_NAME", payload: name })}
                onDescriptionChange={(description) => dispatch({type: "UPDATE_DESCRIPTION", payload: description})}
                onAddTag={(label) => dispatch({type: "ADD_TAG", payload: {id: generateRandomHexCode(), label}})}
                onRemoveTag={(id) => dispatch({type: "REMOVE_TAG", payload: id})}
              />
            ) : (
              <>
                <h2>Please login to see your profile!</h2>
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;