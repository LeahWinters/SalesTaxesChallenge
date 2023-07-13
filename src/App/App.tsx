import { useState, FC } from 'react';
import Form from '../Form/Form';
import { AddedGoodsDataInterface, IReceipts } from '../interfacesData';
import CurrentGoods from '../CurrentGoods/CurrentGoods';
import ReceiptsHolder from '../ReceiptsHolder/ReceiptsHolder';
import './App.css';

const App: FC = () => {
  const [currentGoods, setCurrentGoods] = useState(Array<AddedGoodsDataInterface>);
  const [receiptsData, setReceiptsData] = useState(Array<IReceipts>);

  const addGoodsToGoodsData = ({name, category, isImported, price}: AddedGoodsDataInterface) => {
    setCurrentGoods([...currentGoods, {name, category, isImported, price: Number(price)}]);
  };

  const clearCurrentGoods = () => {
    setCurrentGoods([]);
  };

  const removeGoodFromCurrentGoods = (goodToBeRemoved: object) => {
    const updatedGoods = currentGoods.filter(good => {
      return good !== goodToBeRemoved;
    });
    setCurrentGoods(updatedGoods);
  };

  const createReceiptData = (allGoods: AddedGoodsDataInterface[], taxTotal:number, salesTotal: number) => {
    setReceiptsData([...receiptsData, {receiptItems: allGoods, salesTax: taxTotal, transactionTotal: salesTotal}]);
  };

  const calculateAndAddTaxes = () => {
    let salesTotal = 0;
    let taxTotal = 0;
    const allGoods = currentGoods.map(good => {
      const goodsTotal = good.price;
      let newGoodsTotal = goodsTotal;

      if (good.category === 'other') {
        const itemSalesTax = Number((Math.ceil((goodsTotal*0.10)*20)/20).toFixed(2));
        taxTotal += itemSalesTax;
        newGoodsTotal += itemSalesTax;
      }
      if (good.isImported) {
        const itemImportedTax = Number((Math.ceil((goodsTotal*0.05)*20)/20).toFixed(2));
        taxTotal += itemImportedTax;
        newGoodsTotal += itemImportedTax;
      }

      salesTotal += newGoodsTotal;
      good.price = newGoodsTotal;
      return good;
    });
    
    createReceiptData(allGoods, taxTotal, salesTotal);
  };

  return (
    <div>
      <h1>Sales Taxes Challenge</h1>
      <Form
        addGoodsToGoodsData={addGoodsToGoodsData}
      />
      <CurrentGoods 
        currentGoods={currentGoods}
        removeGoodFromCurrentGoods={removeGoodFromCurrentGoods}
        calculateAndAddTaxes={calculateAndAddTaxes}
        clearCurrentGoods={clearCurrentGoods}
      />
      <ReceiptsHolder
        receiptsData={receiptsData}
      />
    </div>
  );
};

export default App;