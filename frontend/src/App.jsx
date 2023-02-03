import io from 'socket.io-client';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import PrivateRoutes from './routes/privateRoute';
import Chat from "./pages/Chat";
import Entry from './pages/Entry';

const socket = io('http://localhost:5000');

const App = () => {
  const [accessUser, setAccessUser] = useState();
  const [users, setUsers] = useState([]);

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half box has-background-info-light">
        <Routes>
          <Route path="/" element={<Entry setAccessUser={setAccessUser} setUsers={setUsers} />} />
          <Route element={<PrivateRoutes access={accessUser} />}>
            <Route path="/chat" element={<Chat users={users} accessUser={accessUser}/>} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App