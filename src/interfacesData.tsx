export interface AddedGoodsDataInterface {
  name: string,
  category: string,
  isImported: boolean,
  price: number
};

export interface IReceipts {
  receiptItems: AddedGoodsDataInterface[],
  salesTax: number,
  transactionTotal: number
};
