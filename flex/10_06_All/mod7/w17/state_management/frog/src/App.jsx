// Styles
import "./App.css";

// Libraries
import { useReducer } from "react";

// Components
import Profile from "./Profile";
import Navbar from "./Navbar";
import Loading from "./components/Loading";
import { dbCall } from "./helpers/helpers";
import userReducer from "./hooks/userReducer";

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
  username: "Felipa",
  description:
    "Felipa is a friendly tree frog who enjoys spending her days sleeping and her nights chasing mosquitos for a delicious meal.",
};

function App() {
  const [user, dispatch] = useReducer(userReducer, defaultState);

  const onLogin = () => {
    // const changedState = {
    //   loggedIn: true,
    //   loading: false,
    //   logo: "frog_profile.jpg",
    //   tags: [
    //     {
    //       id: "e930db",
    //       label: "green",
    //     },
    //     {
    //       id: "82492e",
    //       label: "hungry",
    //     },
    //     {
    //       id: "cd82dc",
    //       label: "happy",
    //     },
    //   ],
    //   username: "Felipa",
    //   description:
    //     "Felipa is a friendly tree frog who enjoys spending her days sleeping and her nights chasing mosquitos for a delicious meal.",
    // };
    // const newUser = Object.assign({}, user, { loggedIn: true})
    // console.log("Clicked")
    // user.loggedIn = true
    dispatch({type: "LOGIN"})
  }

  const onLogout = () => {
    // const newUser = { ...user}
    // newUser.loggedIn = false
    // console.log("Clicked")
    // setUser(newUser)
    dispatch({type: "LOGOUT"})
  }

  const updateName = (name) => {
    // const newUser = {...user}
    // newUser.username = name;
    // setUser(newUser)
    dispatch({type: "SET_LOADING", payload: true})
    dbCall(1000).then((res) => {
      dispatch({type: "UPDATE_NAME", payload: name})
      dispatch({type: "SET_LOADING", payload: false})
    })
  }

  const updateDescription = (description) => {
    // const newUser = {...user}
    // newUser.description = description;
    // setUser(newUser)
    dispatch({type: "UPDATE_DESCRIPTION", payload: description})
  }

  const addTag = (tag) => {
    // const newTags = [...user.tags];
    // const newId = generateRandomHexCode()
    // newTags.push({
    //   id: newId,
    //   label: tag,
    // })
    // setUser({...user, tags: newTags})
    dispatch({type: "ADD_TAG", payload: tag})
  }

  const removeTag = (id) => {
    // const newTags = [...user.tags];
    // const tagIndex = newTags.findIndex((tag) => tag.id === id)
    // if (tagIndex >= 0) {
    //   newTags.splice(tagIndex, 1);
    // }
    // setUser({...user, tags: newTags});
    dispatch({type: "REMOVE_TAG", payload: id})
  }

  return (
    <div>
      <Navbar loggedIn={user.loggedIn} onLogin={onLogin} onLogout={onLogout} username={user.username} />
      <main>
        {user.loading ? (
          <Loading />
        ) : (
          <>
            {user.loggedIn ? (
              <Profile
                logo={user.logo}
                alt={`Profile picture for ${user.name}`}
                name={user.username}
                description={user.description}
                tags={user.tags}
                updateName={updateName}
                updateDescription={updateDescription}
                addTag={addTag}
                removeTag={removeTag}
                loading={user.loading}
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