// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/service/home';
import ExportIncomingGoods from '../../../app/service/incomingGoods';

declare module 'egg' {
  interface IService {
    home: ExportHome;
    incomingGoods: ExportIncomingGoods;
  }
}
