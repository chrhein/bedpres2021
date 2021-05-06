import React, { useEffect, useState } from "react";
import { getRooms, insertRoom } from "../../mongodb/setup";
import "./Rooms.css";
import { useHistory } from "react-router";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  const onCreateRoom = (name) => {
    if (name) {
      insertRoom(name).then(() => {
        getRooms().then(setRooms);
      });
    }
  };

  useEffect(() => {
    getRooms().then(setRooms);
  }, []);
  return (
    <main>
      <section>
        <h1>Rooms</h1>
        <CreateRoom onCreateRoom={onCreateRoom} />
      </section>
      <section>
        {rooms.map((room) => (
          <Room room={room} />
        ))}
      </section>
    </main>
  );
}

function CreateRoom(props) {
  const [name, setName] = useState("");

  return (
    <div className="create-room">
      <label>Enter room name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn primary" onClick={() => props.onCreateRoom(name)}>
        Create room
      </button>
    </div>
  );
}

function Room(props) {
  const history = useHistory();
  return (
    <div className="room-row">
      <p>{props.room.topic}</p>
      <a
        className="btn"
        href={"/estimates/" + props.room._id.toHexString()}
        onClick={() =>
          history.push("/estimates/" + props.room._id.toHexString())
        }
      >
        Enter room
      </a>
    </div>
  );
}
