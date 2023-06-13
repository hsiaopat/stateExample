import React, { useEffect } from 'react';

// export default class ChildA extends React.Component {

//   componentDidMount(){
//     consoloe.log('mounting child A');
//   }

//   componentWillUnmount(){
//     console.log('unmounting child A')
//   }

//   render(){
//     return <p>ChildA</p>;
//   }
// }
export default function ChildA() {
  useEffect(() => {
    console.log('mounting child A');
    return () => {
      console.log('unmounting child A');
    };
  }, []);

  return <p>ChildA</p>;
}
