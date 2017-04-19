class AppService {
  constructor(ApiUrl) {
    this.ApiUrl = ApiUrl;
  }

  validateField(query) {
    const patron = /^[0-9a-zA-Z\s]*$/;
    if (!query.search(patron)) {
      return true;
    }
    return false;
  }

}

AppService.$inject = ['ApiUrl'];

export default AppService;
