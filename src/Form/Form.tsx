import React, { useState, FC } from 'react';
import './Form.css';

interface Form {

};

const Form: FC = () => {
  const [goodsName, setGoodsName] = useState('');
  const [category, setCategory] = useState('');
  const [isImported, setIsImported] = useState(false);
  const [isAddGoodButtonDisabled, setIsAddGoodButtonDisabled] = useState(true);

  return (
    <div className='form'>
      <h3 className='formHeader'>Add New Goods</h3>
      <div className='inputHolder'>
        <input type='text' placeholder='Goods Name' className='nameInput'></input>
        <select id='category-select' className='categorySelect'>
          <option value='' disabled selected>Select Category</option>
          <option value='food'>Food</option>
          <option value='book'>Book</option>
          <option value='medical'>Medical Product</option>
          <option value='other'>Other</option>
        </select>
        <select id='imported-select' className='importedSelect'>
          <option value='' disabled selected>Imported?</option>
          <option value='no'>No</option>
          <option value='yes'>Yes</option>
        </select>
        <input type='text' placeholder='Price' className='priceInput'></input>
        <button disabled={isAddGoodButtonDisabled}>Add Good</button>
      </div>
    </div>
  );
};

export default Form;