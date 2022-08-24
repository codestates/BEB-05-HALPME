module.exports = {
  networks: {
    // development: {
    //   host: "localhost",
    //   port: 8545,
    //   network_id: "*", // Match any network id
    //   gas: 5000000
    // }
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777", // Match any network id
      gas: 5000000
    }
  },
  compilers: {
    solc: {
      version: "0.8.10",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
