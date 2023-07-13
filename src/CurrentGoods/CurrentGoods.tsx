import { FC, useEffect, useState } from 'react';
import { AddedGoodsDataInterface } from '../interfacesData';
import './CurrentGoods.css';

interface ICurrentGoods {
  currentGoods: Array<AddedGoodsDataInterface>;
  removeGoodFromCurrentGoods: (goodsData: AddedGoodsDataInterface) => void;
  calculateAndAddTaxes: () => void;
  clearCurrentGoods: () => void;
}

const CurrentGoods: FC<ICurrentGoods> = ({ currentGoods, removeGoodFromCurrentGoods, calculateAndAddTaxes, clearCurrentGoods }) => {
  const [isCheckOutDisabled, setIsCheckOutDisabled] = useState(true);

  useEffect(() => {
    if (currentGoods.length > 0) {
      setIsCheckOutDisabled(false);
    } else {
      setIsCheckOutDisabled(true);
    }
  }, [currentGoods]);

  const handleCheckOut = () => {
    calculateAndAddTaxes();
    clearCurrentGoods();
  };

  const getCurrentGoodsToDisplay = () => {
    if (currentGoods.length > 0) {
      return currentGoods.map(good => (
        <tr id={good.name}>
          <td className='cell'>{good.name}</td>
          <td className='cell'>{good.price}</td>
          <td className='deleteBtnHolder'>
            <button
              className='deleteBtn'
              onClick={() => removeGoodFromCurrentGoods(good)}
            >
              Delete
            </button>
          </td>
        </tr>
      ));
    } else {
      return (
        <tr>
          <td>You have not added any goods yet, please add some to get started!</td>
        </tr>
      );
    }
  };

  const getTableToDisplay = () => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th className='costCell'>Cost Before Tax</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {getCurrentGoodsToDisplay()}
      </tbody>
    </table>
  );

  return (
    <div className='currentGoodsHolder'>
      <h3>Current Goods</h3>
      <div className='tableholder'>
        {getTableToDisplay()}
        <button 
          className={isCheckOutDisabled ? 'checkOutBtn buttonDisabled' : 'checkOutBtn buttonEnabled'}
          onClick={() => handleCheckOut()}
          >
            Check Out
        </button>
      </div>
    </div>
  );
};

export default CurrentGoods;

