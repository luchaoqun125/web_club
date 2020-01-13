// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/model/home';
import ExportHomeList from '../../../app/model/homeList';
import ExportIncomingGoods from '../../../app/model/incomingGoods';
import ExportIncomingGoodsList from '../../../app/model/incomingGoodsList';
import ExportSaleGoods from '../../../app/model/saleGoods';
import ExportSaleGoodsList from '../../../app/model/saleGoodsList';
import ExportStockGoods from '../../../app/model/stockGoods';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Home: ReturnType<typeof ExportHome>;
    HomeList: ReturnType<typeof ExportHomeList>;
    IncomingGoods: ReturnType<typeof ExportIncomingGoods>;
    IncomingGoodsList: ReturnType<typeof ExportIncomingGoodsList>;
    SaleGoods: ReturnType<typeof ExportSaleGoods>;
    SaleGoodsList: ReturnType<typeof ExportSaleGoodsList>;
    StockGoods: ReturnType<typeof ExportStockGoods>;
    User: ReturnType<typeof ExportUser>;
  }
}
