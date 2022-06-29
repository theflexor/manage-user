import { useState } from "react";
import "./App.css";
import ModalUser from "./components/Modal/ModalUser";
import UserList from "./components/UserList/UserList";

function App() {
  let [openModal, setOpenModal] = useState(false);
  let [curentUser, setCurentUser] = useState({});
  let user = curentUser
  let handleModal = (user) => {
    setCurentUser(user);
    setOpenModal(!openModal);
  };
  return (
    <div className="App">
      <UserList handleModal={handleModal} />
      <ModalUser
        curentUser={user}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}

export default App;
