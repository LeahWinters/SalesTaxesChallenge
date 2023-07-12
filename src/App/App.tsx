import { useState, FC } from 'react';
import Form from '../Form/Form';
import AddedGoodsDataInterface from '../interfacesData';
import './App.css';

export const App: FC = () => {
  const [currentGoods, setCurrentGoods] = useState(Array<AddedGoodsDataInterface>);

  const addGoodsToGoodsData = ({name, category, isImported, price}: AddedGoodsDataInterface) => {
    setCurrentGoods([...currentGoods, {name, category, isImported, price}]);
  };

  return (
    <div className='app'>
      <h1 className='salesTaxHeader'>Sales Taxes Challenge</h1>
      <Form
        addGoodsToGoodsData={addGoodsToGoodsData}
      />
    </div>
    // <div className='salesTaxHeader'>Sales Taxes Challenge</div>
  );
};

export default App;