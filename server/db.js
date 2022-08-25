import db from "./models/index";

const dbConfig = async () => {
  await db.sequelize
    .sync({ force: true })
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log("An Error Occured On DB Connecting");
    });
};
// CRUD TEST
const Test = async () => {
  // Create Test
  // const cu = await db.User.create({
  //   loginId: "korea",
  //   password: "1234",
  //   nickname: "HALP",
  //   address: "12345678912345678912345678912345",
  //   role: 0,
  // });
  // await db.Post.create({
  //   title: "안녕하세요 redux에 대해서 궁금한 점이 있습니다.",
  //   id: 1,
  //   contents: "안녕하쇼! redux에 대해서 알아보러온 하얼빈의 장첸이오",
  //   category: 1,
  //   status: 0,
  // });
  // Read Test
  // const ru = await db.User.findOne({
  //   where: { loginId: "korea" },
  //   raw: true,
  // attributes: ["*"], want specify field's value push name in Array
  // english very hard
  // });
  // Update Test
  //await db.User.update({ loginId: "KOREA" }, { where: { loginId: "korea" } });
  // Delete Test
  //await db.User.destroy({ where: { loginId: "KOREA" } });

  // dummyData 생성

  const u = await db.User.findAll();
  if (u.length <= 0) {
    await db.User.create({
      loginId: "korea",
      password: "1234",
      nickname: "HALP",
      address: "12345678912345678912345678912345",
      role: 0,
    });
  }

  const p = await db.Post.findAll();
  if (p.length <= 0) {
    await db.Post.create({
      title: "안녕하세요 redux에 대해서 궁금한 점이 있습니다.",
      id: 1,
      contents: "안녕하쇼! redux에 대해서 알아보러온 하얼빈의 장첸이오",
      category: 1,
      status: 0,
    });
  }

  const w = await db.Wallet.findAll();
  if (p.length <= 0) {
    await db.Wallet.create({
      address: "0x11512de68B5Be4F1B6Cf43f7Aa0455C2408b203b",
      balance: 50,
      id: 1,
    });
  }

  const n = await db.NFT.findAll();
  if (n.length <= 0) {
    await db.NFT.create({
      URI: "ipfs://imagedesune",
      price: 5,
      address: "0x11512de68B5Be4F1B6Cf43f7Aa0455C2408b203b",
    });
  }
};

dbConfig().then(() => Test());
export default db;
