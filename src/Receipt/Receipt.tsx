import { FC } from 'react';
import { AddedGoodsDataInterface } from '../interfacesData';
import './Receipt.css';

interface IReceipts {
  soldItems: Array<AddedGoodsDataInterface>;
  salesTax: number;
  total: number;
}

const Receipts: FC<IReceipts> = ({ soldItems, salesTax, total }) => {
  const getItemsToDisplay = () => {
    return soldItems.map(item => (
      <p>{item.name}: ${item.price}</p>
    ));
  };

  return (
    <div className='receiptCard'>
      {getItemsToDisplay()}
      <p>Sales Tax: ${salesTax}</p>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Receipts;