import React, { useState, useEffect } from 'react';
import AddedGoodsDataInterface from '../interfacesData';
import './Form.css';

interface FormInterface {
  addGoodsToGoodsData: () => void;
};

const Form = ({ addGoodsToGoodsData }: FormInterface) => {
  const [goodsName, setGoodsName] = useState('');
  const [category, setCategory] = useState('');
  const [isImported, setIsImported] = useState('');
  const [goodsPrice, setGoodsPrice] = useState('');
  const [isAddGoodButtonDisabled, setIsAddGoodButtonDisabled] = useState(true);
  
  useEffect(() => {
    if ((goodsName && goodsPrice && category && isImported) !== '' ) {
      setIsAddGoodButtonDisabled(false);
    }
  }, [goodsName, goodsPrice, category, isImported]);


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
            value={isImported}
            onChange={e => setIsImported(e.target.value)}
          >
            <option value='' disabled>Imported?</option>
            <option value='no'>No</option>
            <option value='yes'>Yes</option>
          </select>
          <input 
            type='number'
            placeholder='Price' 
            className='priceInput'
            onChange={e => setGoodsPrice(e.target.value)}
          />
        </div>
        <button 
          disabled={isAddGoodButtonDisabled} 
          className={isAddGoodButtonDisabled ? 'buttonDisabled addGoodsButton' : 'buttonEnabled addGoodsButton'}
        >
          Add Good
        </button>
      </div>
    </div>
  );
};

export default Form;