class IExampleDataProvider {
    async fetchExampleData(location) {
      throw new Error("fetchExampleData method not implemented");
    }
  }
  
  module.exports = IExampleDataProvider;