import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementByAmount,
  incrementAsync,
  selectCount
} from './counterSlice';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        
      </div>
    </div>
  );
}
