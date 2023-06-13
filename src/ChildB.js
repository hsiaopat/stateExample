import React, { useEffect } from 'react';

export default function ChildB() {
  useEffect(() => {
    console.log('mounting child B');
    return () => {
      console.log('unmounting child B');
    };
  }, []);

  return <p>ChildB</p>;
}
