// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIncomingGoodsList from '../../../app/model/IncomingGoodsList';
import ExportHome from '../../../app/model/home';
import ExportHomeList from '../../../app/model/homeList';
import ExportIncomingGoods from '../../../app/model/incomingGoods';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    IncomingGoodsList: ReturnType<typeof ExportIncomingGoodsList>;
    Home: ReturnType<typeof ExportHome>;
    HomeList: ReturnType<typeof ExportHomeList>;
    IncomingGoods: ReturnType<typeof ExportIncomingGoods>;
    User: ReturnType<typeof ExportUser>;
  }
}
