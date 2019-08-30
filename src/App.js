import React from 'react';
import Customer from './components/Customer'
import './App.css';

const person1 = {
  'id' : 20186570,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '조예진', 
  'birthday' : '991125',
  'gender' : '여자', 
  'job' : '인턴'
}
// 6분 18초까지 봄 https://www.youtube.com/watch?v=UT9U9WALGS0&list=PLRx0vPvlEmdD1pSqKZiTihy5rplxecNpz&index=5

class App extends React.Component {
  render() {
    return (
      <Customer
      id = {person1.id}
      image = {person1.image}
      name = {person1.name}
      birthday = {person1.birthday}
      gender = {person1.gender}
      job = {person1.job}
      />
   )
  }
}

export default App;
