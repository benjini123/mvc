import { sequelize } from "./models/db";
import "./models";

sequelize.sync({ alter: true }).then((res) => {
  console.log(res);
});

// sequelize.sync({ force: true }).then((res) => {
//   console.log(res);
// });
