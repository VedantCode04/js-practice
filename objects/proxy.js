const gamesettings = { difficulty: "easy", age: 20 };

const gamesettingsProxy = new Proxy(gamesettings, {
  get: (obj, property) => {
    return obj[property];
  },

  set: (obj, property, value) => {
    if (property == "age") {
      if (typeof value == "string") {
        throw new Error("age must be numeric");
      }

      if (value < 18) {
        throw new Error("not eligible");
      }
      Reflect.set(obj, property, value);
      return true;
    }
  },
});

gamesettingsProxy.age = "hello";
