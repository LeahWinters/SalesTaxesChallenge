import { useState, FC, useEffect } from 'react';
import { IAddedGoodsData } from '../interfacesData';
import './Form.css';

interface FormInterface {
  addGoodsToGoodsData: (goodsData: IAddedGoodsData) => void;
}

const Form: FC<FormInterface> = ({ addGoodsToGoodsData }) => {
  const [goodsName, setGoodsName] = useState('');
  const [category, setCategory] = useState('');
  const [isImported, setIsImported] = useState(false);
  const [isImportedString, setIsImportedString] = useState('');
  const [goodsPrice, setGoodsPrice] = useState('');
  const [isAddGoodButtonDisabled, setIsAddGoodButtonDisabled] = useState(true);

  useEffect(() => {
    if ((goodsName && goodsPrice && category && isImportedString)) {
      setIsAddGoodButtonDisabled(false);
    } else {
      setIsAddGoodButtonDisabled(true);
    }
  }, [goodsName, goodsPrice, category, isImported, isImportedString]);

  const clearFormInputs = () => {
    setGoodsName('');
    setCategory('');
    setIsImported(false);
    setIsImportedString('');
    setGoodsPrice('');
  };

  const submitNewGood = () => {
    addGoodsToGoodsData({name: goodsName, category, isImported, price: parseFloat(goodsPrice)});
    clearFormInputs();
  };

  const handleIsImportedSelection = (selectedValue: string) => {
    if (selectedValue === 'no') {
      setIsImported(false);
      setIsImportedString('no');
    } else if ( selectedValue === 'yes') {
      setIsImported(true);
      setIsImportedString('yes');
    }
  };

  const verifyPriceIsCorrectFormat = (priceString: string) => {
    // restricts user to only be able to enter numbers and one decimal point
    const regex = /^(\d)*(\.)?([0-9]{1,2})?$/;
    if (regex.test(priceString) || priceString === '') {
      setGoodsPrice(priceString);
    }
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
            value={goodsName}
          />
          <select 
            id='category-select' 
            className='categorySelect' 
            value={category} 
            onChange={e => setCategory(e.target.value)}
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
            value={isImportedString}
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
            value={goodsPrice}
            onChange={e => verifyPriceIsCorrectFormat(e.target.value)}
          />
        </div>
        <button 
          disabled={isAddGoodButtonDisabled} 
          className={isAddGoodButtonDisabled ? 'buttonDisabled addGoodsButton' : 'buttonEnabled addGoodsButton'}
          onClick={() => submitNewGood()}
        >
          Add Good
        </button>
      </div>
    </div>
  );
};

export default Form;