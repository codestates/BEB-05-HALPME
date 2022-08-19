import db from "./models/index";

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("An Error Occured On DB Connecting");
  });
// CRUD TEST
const Test = async () => {
  // Create Test
  const cu = await db.User.create({
    loginId: "korea",
    password: "1234",
    nickname: "HALP",
    address: "12345678912345678912345678912345",
    role: 0,
  });

  // Read Test
  const ru = await db.User.findOne({
    where: { loginId: "korea" },
    raw: true,
    // attributes: ["*"], want specify field's value push name in Array
    // english very hard
  });

  // Update Test
  await db.User.update({ loginId: "KOREA" }, { where: { loginId: "korea" } });

  // Delete Test
  await db.User.destroy({ where: { loginId: "KOREA" } });
};

// Test(); // delete comment
export default db;
