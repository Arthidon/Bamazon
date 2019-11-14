# Bamazon

<p align="center">
<a href="https://drive.google.com/file/d/1gXECDIRCiITHSCd9oU6P5RsWh4731p40/view" target="blank">Video Demo</a>
</P>

## Overview

The goal here was to make an Amazon-like storefront with the MySQL and Node. The app will take in orders from customers and deplete stock from the store's inventory. This will all take place with a CLI interface.

## Technology Used

* JavaScript 
* Node Package - [Inquirer](https://www.npmjs.com/package/inquirer)
* Node Package - [mysql](https://www.npmjs.com/package/mysql)

## Instructions

### System Prerequisites
You will need to install [Node](https://nodejs.org/en/download) run via command line. 

### Installation
1. Clone the repo: 
```sh
git clone https://github.com/Arthidon/Bamazon.git
```
2. Install NPM packages:
```sh
npm install
```
### bamazonCustomer.js
To begin, the user should run **bamazonCustomer.js** via command line.
```sh
node bamazonCustomer.js
```
A list of items for sale will be displayed. They should then enter the SKU of the product they would like to purchase, followed by the amount they would like to purchase.

The user will then be given a total purchase price and prompted if they would like to purchase something else. The user should then enter **Y** or **N**.


![Example](/images/newexample.jpg)

