import { useState, FC } from 'react';
import Form from '../Form/Form';
import { IAddedGoodsData, IReceipts } from '../interfacesData';
import CurrentGoods from '../CurrentGoods/CurrentGoods';
import ReceiptsHolder from '../ReceiptsHolder/ReceiptsHolder';

const App: FC = () => {
  const [currentGoods, setCurrentGoods] = useState(Array<IAddedGoodsData>);
  const [receiptsData, setReceiptsData] = useState(Array<IReceipts>);

  const addGoodsToGoodsData = ({name, category, isImported, price}: IAddedGoodsData) => {
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

  const createReceiptData = (allGoods: IAddedGoodsData[], taxTotal:number, salesTotal: number) => {
    setReceiptsData([...receiptsData, {receiptItems: allGoods, salesTax: taxTotal, transactionTotal: salesTotal}]);
  };

  const calculateAndAddTaxes = () => {
    let salesTotal = 0;
    let taxTotal = 0;
    const allGoods = currentGoods.map(good => {
      const goodsTotal = good.price;
      let newGoodsTotal = goodsTotal;

      if (good.category === 'other') {
        // gets proper tax and rounds it up to the nearest 5 cents
        const itemSalesTax = Number((Math.ceil((goodsTotal*0.10)*20)/20).toFixed(2));
        taxTotal += itemSalesTax;
        newGoodsTotal += itemSalesTax;
      }
      if (good.isImported) {
        // gets proper tax and rounds it up to the nearest 5 cents
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