import React, { useEffect } from 'react'; // Importing React and useEffect from 'react'
import Nav from "./Views/Nav";
import { dbStart} from './utils/Database/SQLite';

export default function App() {
  useEffect(() => {
    dbStart();
  }, []);

  return (
    <Nav /> // Using JSX syntax to render the Nav component
  );
}