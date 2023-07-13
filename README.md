# SalesTaxesChallenge

## Overview:

The goal of this code challenge was to meet the expectations set in this prompt:

There are a variety of items for sale at a store. When a customer purchases items, they receive a receipt. The receipt
lists all of the items purchased, the sales price of each item (with taxes included), the total sales taxes for all items,
and the total sales price.

Basic sales tax applies to all items at a rate of 10% of the item’s list price, with the exception of books, food, and
medical products, which are exempt from basic sales tax. An import duty (import tax) applies to all imported items at
a rate of 5% of the shelf price, with no exceptions.

Write an application that takes input for shopping baskets and returns receipts in the format shown below, calculating
all taxes and totals correctly. When calculating the sales tax, round the value up to the nearest 5 cents. For example, if
a taxable item costs $5.60, an exact 10% tax would be $0.56, and the final price after adding the rounded tax of $0.60
should be $6.20.

#### Input example 1: 
1 Book at 12.49,
1 Music CD at 14.99,
1 Chocolate bar at 0.85

#### Output example 1: 
Book: 24.98,
Music CD: 16.49,
Chocolate bar: 0.85,
Sales Taxes: 1.50,
Total: 42.32

#### Input example 2:
1 Imported box of chocolates at 10.00,
1 Imported bottle of perfume at 47.50

#### Output example 2:
Imported box of chocolates: 10.50,
Imported bottle of perfume: 54.65,
Sales Taxes: 7.65,
Total: 65.15

## Screenshot Overview:

### Landing page:
![Screenshot 2023-07-13 at 6 34 18 PM](https://github.com/LeahWinters/SalesTaxesChallenge/assets/55927708/99060200-73c0-4e54-9127-78708caf83ab)

### Preview of enabled Add Goods button:
![Screenshot 2023-07-13 at 6 34 42 PM](https://github.com/LeahWinters/SalesTaxesChallenge/assets/55927708/4b9b13ff-adab-45c6-b614-7cd30e1bf8a5)

### Preview of a receipt and view of added goods with enabled checkout button:
![Screenshot 2023-07-13 at 6 35 59 PM](https://github.com/LeahWinters/SalesTaxesChallenge/assets/55927708/93455e73-4add-471c-86e9-128cd1762d9d)

### Preivew with more than one receipt:
![Screenshot 2023-07-13 at 6 36 10 PM](https://github.com/LeahWinters/SalesTaxesChallenge/assets/55927708/0aaf56d9-91c3-4a02-9435-f1edfb5cce0e)

## Set up:
1. Clone this repo
2. Run `npm install`
3. To run locally use command `npx vite`
4. Navigate to http://localhost:5173/
