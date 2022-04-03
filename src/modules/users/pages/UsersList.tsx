import React, {useState, useEffect} from 'react';
import {db} from "../../../configs/firebase.config";
import {collection, getDocs} from 'firebase/firestore';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
     const data = await getDocs(usersCollectionRef);
     // @ts-ignore
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsers();
  }, []);

  return (
    <>
      {users && users.map((user: any) => {
        return (
          <>
            {user.name}
          </>
        )
      })}
    </>
  );
};

export default UsersList;
