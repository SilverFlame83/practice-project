import { useState } from 'react/cjs/react.development';
import './App.css'
import InputComponent from "./components/UserInput/InputComponent";
import UserList from './components/UserList/UserList';

function App() {
  const [userContent, setUserContent] = useState('');

  const addUserHandler = (enteredText)=>{
    setUserContent(prevUser =>{
      const updatedUser = [...prevUser];
      updatedUser.unshift({text: enteredText, id: Math.random().toString()});

      return updatedUser;
    })
  }

  const deleteHandler = userId=>{
    setUserContent(prevUser=>{
      const updatedUser = prevUser.filter (user => user.id !== userId );
      console.log('User is deleted')
      return updatedUser;
    });
  };

  let content = (<p style={{textAlign:'center'}}>No user found. Maybe you can be the first?</p>);

  if(userContent.length > 0){
    content = (<UserList items={userContent} onDelete={deleteHandler}/>)
  };

  return (
    <div>
      <section id='goal-form'>
        <InputComponent onAddUser={addUserHandler}></InputComponent>
      </section>
      <section id='goals'>
    {content}
      </section>
    </div>
  );
}

export default App;
