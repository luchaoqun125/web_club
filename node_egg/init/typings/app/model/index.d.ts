// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/model/home';
import ExportIncomingGoods from '../../../app/model/incomingGoods';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Home: ReturnType<typeof ExportHome>;
    IncomingGoods: ReturnType<typeof ExportIncomingGoods>;
    User: ReturnType<typeof ExportUser>;
  }
}
