### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once


知识笔记
### MsSql命令，homebrew
  # 启动 mysql, 并设置为开机启动
  brew services start mysql
  # 关闭 mysql
  brew services stop mysql
  # 重启 mysql
  brew services restart mysql

### 知识记录
控制台输入 lsof -i tcp:port 
port对应端口号。如8080
可以查看该端口被什么程序占用，并显示PID，
如果要杀死进程直接执行 kill 命令
kill PID

### 项目docker运行
  "docker": "egg-sequelize db:migrate && egg-scripts start"

### ？redis 配置



<!-- 
一个主账号，
主账号可以开分账号进行管理
 -->

我的疑惑：
手机直播怎么实现
手机怎么进行通话，怎么实现

 店铺拆分：
 资源走cdn
