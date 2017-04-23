class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    this.store[key] = undefined;
  }
};

global.localStorage = new LocalStorageMock;


//setupTestFrameworkScriptFile
