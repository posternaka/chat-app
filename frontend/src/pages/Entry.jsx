import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, createUser } from "../rests";

const Entry = ({ setAccessUser, setUsers }) => {
  const navigate = useNavigate();
  const [valueUser, setValueUser] = useState();

  const entryUser = async () => {
    const users = await getUsers();
    setUsers(users.data);

    const accessUser = users.data.find(user => user.name === valueUser);

    if (!accessUser) {
      const getUser = await createUser({ name: valueUser});
      setAccessUser(getUser.data);
      navigate('/chat');
      return;
    }
    
    setAccessUser(accessUser);
    navigate('/chat');
    return;
  }

  return (
      <div className="field has-addons is-justify-content-center">
        <div className="control">
          <input className="input" type="text" placeholder="Введите ваше имя" onChange={(e) => setValueUser(e.target.value)}/>
        </div>
        <div className="control">
          <button className="button is-info" onClick={() => entryUser()} >
            Come In
          </button>
        </div>
      </div>
  )
}

export default Entry