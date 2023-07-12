import { useState, FC } from 'react';
import Form from '../Form/Form';
import AddedGoodsDataInterface from '../interfacesData';
import CurrentGoods from '../CurrentGoods/CurrentGoods';
import './App.css';

export const App: FC = () => {
  const [currentGoods, setCurrentGoods] = useState(Array<AddedGoodsDataInterface>);

  const addGoodsToGoodsData = ({name, category, isImported, price}: AddedGoodsDataInterface) => {
    setCurrentGoods([...currentGoods, {name, category, isImported, price}]);
  };

  const removeGoodFromCurrentGoods = (goodToBeRemoved: object) => {
    const updatedGoods = currentGoods.filter(good => {
      return good != goodToBeRemoved;
    });
    setCurrentGoods(updatedGoods);
  };

  return (
    <div className='app'>
      <h1 className='salesTaxHeader'>Sales Taxes Challenge</h1>
      <Form
        addGoodsToGoodsData={addGoodsToGoodsData}
      />
      <CurrentGoods 
        currentGoods={currentGoods}
        removeGoodFromCurrentGoods={removeGoodFromCurrentGoods}
      />
    </div>
  );
};

export default App;