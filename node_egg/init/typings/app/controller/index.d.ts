// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportIncomingGoods from '../../../app/controller/incomingGoods';
import ExportSaleGoods from '../../../app/controller/saleGoods';
import ExportStockGoods from '../../../app/controller/stockGoods';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    incomingGoods: ExportIncomingGoods;
    saleGoods: ExportSaleGoods;
    stockGoods: ExportStockGoods;
    user: ExportUser;
  }
}
