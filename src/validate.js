class Validator {
  constructor() {}

  static add(name, fn) {
    Validator.prototype[name] = fn;
  }

  validate(data, rules) {
    let errors = {};
    rules.forEach(rule => {
      let value = data[rule.key];
      if (rule.required) {
        let error = this.required(value);
        if (error) {
          ensureIsObject(errors, [rule.key]);
          errors[rule.key].required = error;
          return;
        }
      }

      var validators = Object.keys(rule).filter(
        v => v !== "key" && v !== "required"
      );

      // 遍历valedator，并逐一调用对应的函数
      validators.forEach(validatorKey => {
        if (this[validatorKey]) {
          let error = this[validatorKey](value, rule[validatorKey]);
          if (error) {
            ensureIsObject(errors, [rule.key]);
            errors[rule.key][validatorKey] = error;
          }
        } else {
          throw `不存在的校验器${validatorKey}`;
        }
      });
    });
    return errors;
  }

  required(value) {
    if (!value && value !== 0) {
      return "必填";
    }
  }

  pattern(value, pattern) {
    if (pattern === "email") {
      pattern = /^.+@.+$/;
    }
    if (pattern.test(value) === false) {
      return "邮箱格式错误";
    }
  }

  minLength(value, minLength) {
    if (value.length < minLength) {
      return "太短";
    }
  }

  maxLength(value, maxLength) {
    if (value.length > maxLength) {
      return "太长";
    }
  }
}

export default Validator;

function ensureIsObject(obj, key) {
  if (typeof obj[key] !== "object") {
    obj[key] = {};
  }
}
