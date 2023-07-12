import { useState, FC, useEffect } from 'react';
import AddedGoodsDataInterface from '../interfacesData';
import './Form.css';

interface FormInterface {
  addGoodsToGoodsData: (goodsData: AddedGoodsDataInterface) => void;
};

const Form: FC<FormInterface> = ({ addGoodsToGoodsData }) => {
  const [goodsName, setGoodsName] = useState('');
  const [category, setCategory] = useState('');
  const [isImported, setIsImported] = useState(false);
  const [goodsPrice, setGoodsPrice] = useState('');
  const [isAddGoodButtonDisabled, setIsAddGoodButtonDisabled] = useState(true);
  
  useEffect(() => {
    if ((goodsName && goodsPrice && category && isImported) !== '' ) {
      setIsAddGoodButtonDisabled(false);
    }
  }, [goodsName, goodsPrice, category, isImported]);

  const submitNewGood = () => {
    addGoodsToGoodsData({name: goodsName, category, isImported, price: goodsPrice});
  };

  const handleIsImportedSelection = (selectedValue: string) => {
    selectedValue === 'no' ? setIsImported(false) : setIsImported(true);
  };

  return (
    <div className='form'>
      <h3 className='formHeader'>Add New Goods</h3>
      <div className='inputHolder'>
        <div className='formOptions'>
          <input 
            type='text' 
            placeholder='Goods Name' 
            className='nameInput'
            onChange={e => setGoodsName(e.target.value)}
          />
          <select 
            id='category-select' 
            className='categorySelect' 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value='' disabled>Select Category</option>
            <option value='food'>Food</option>
            <option value='book'>Book</option>
            <option value='medical'>Medical Product</option>
            <option value='other'>Other</option>
          </select>
          <select 
            id='imported-select' 
            className='importedSelect'
            value=''
            onChange={e => handleIsImportedSelection(e.target.value)}
          >
            <option value='' disabled>Imported?</option>
            <option value='no'>No</option>
            <option value='yes'>Yes</option>
          </select>
          <input 
            type='text'
            placeholder='Price' 
            className='priceInput'
            onChange={e => setGoodsPrice(e.target.value)}
          />
        </div>
        <button 
          disabled={isAddGoodButtonDisabled} 
          className={isAddGoodButtonDisabled ? 'buttonDisabled addGoodsButton' : 'buttonEnabled addGoodsButton'}
          onClick={submitNewGood}
        >
          Add Good
        </button>
      </div>
    </div>
  );
};

export default Form;