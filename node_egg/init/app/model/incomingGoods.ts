export default app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const IncomingGoods = app.model.define('incoming_goods', {
    incoming_id: INTEGER,
    supply_company: STRING(100),
    in_person: STRING(100),
    pay_card: INTEGER,
    pay_date: DATE,
    house: INTEGER,
    status: INTEGER,
    goods_id: INTEGER,
    goods_name: STRING(100),
    manufacture_date: DATE,
    due_date: DATE,
    type: INTEGER,
    num: INTEGER,
    price: INTEGER,
    money: INTEGER,
  });

  return IncomingGoods;
};
