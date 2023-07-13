export interface IAddedGoodsData {
  name: string,
  category: string,
  isImported: boolean,
  price: number
}

export interface IReceipts {
  receiptItems: IAddedGoodsData[],
  salesTax: number,
  transactionTotal: number
}
