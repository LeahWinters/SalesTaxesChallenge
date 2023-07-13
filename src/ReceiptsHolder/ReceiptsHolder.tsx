import { FC } from 'react';
import { IReceipts } from '../interfacesData';
import './ReceiptsHolder.css';
import Receipt from '../Receipt/Receipt';

interface IReceiptsHolder {
  receiptsData: Array<IReceipts>;
}

const ReceiptsHolder: FC<IReceiptsHolder> = ({ receiptsData }) => {
  const getReceiptsToDisplay = () => {
    if (receiptsData.length > 0) {
      return receiptsData.map(receipt => (
        <Receipt 
          soldItems={receipt.receiptItems}
          salesTax={receipt.salesTax}
          total={receipt.transactionTotal}
        />
      ));
    } else {
      return (
        <div>You have do not have any receipts currently. Add some items to make some!</div>
      );
    }
  };
  
  return (
    <div className='receiptsHolder'>
      <h3>Receipts</h3>
      <div className='receiptsContainer'>
        {getReceiptsToDisplay()}
      </div>
    </div>
  );
};

export default ReceiptsHolder;