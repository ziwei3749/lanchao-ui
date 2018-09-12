import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
import Validator from "../../src/validate.js";
chai.use(sinonChai);

describe("Validator", () => {
    // BDD 行为驱动测试  （行为描述，描述了button的一系列行为）

    it("存在.", () => {
        expect(Validator).to.be.ok; // 不是Undefined null 0 '' 就是ok
    });

    it("required true 报错", () => {
        let data = {
            email: ""
        };
        let rules = [
            {
                key: "email",
                required: true
            }
        ];
        let validator = new Validator();
        let errors = validator.validate(data, rules);
        expect(errors.email.required).to.eq("必填");
    });

    it("required true 通过", () => {
        // 调用者提供data/rules,得到errors对象，然后验证error对象
        let data = {
            email: 0
        };
        let rules = [
            {
                key: "email",
                required: true
            }
        ];

        let validator = new Validator();
        let errors = validator.validate(data, rules);

        // 期待errors.email不存在。如果正则通过了的话，属性就不存在。存在说明用户传值有问题
        expect(errors.email).to.not.exist;
    });

    it("pattern 报错", () => {
        let data = {
            email: "www.18500905537"
        };
        let rules = [
            {
                key: "email",
                pattern: /^.+@.+$/
            }
        ];

        let validator = new Validator();
        let errors = validator.validate(data, rules);

        expect(errors.email.pattern).to.eq("邮箱格式错误");
    });

    it("pattern 通过", () => {
        let data = {
            email: "www.18500905537@163.com"
        };
        let rules = [
            {
                key: "email",
                pattern: /^.+@.+$/
            }
        ];

        let validator = new Validator();
        let errors = validator.validate(data, rules);
        expect(errors.email).to.not.exist;
    });

    it("内置 pattern email 报错", () => {
        let data = {
            email: "www.18500905537"
        };
        let rules = [
            {
                key: "email",
                pattern: "email"
            }
        ];

        let validator = new Validator();
        let errors = validator.validate(data, rules);
        expect(errors.email.pattern).to.eq("邮箱格式错误");
    });

    it("内置 pattern email 通过", () => {
        let data = {
            email: "www.18500905537@.com"
        };
        let rules = [
            {
                key: "email",
                pattern: "email"
            }
        ];

        let validator = new Validator();
        let errors = validator.validate(data, rules);
        expect(errors.email).to.not.exist;
    });

    it("require & pattern", () => {
        let data = {
            email: ""
        };
        let rules = [
            {
                key: "email",
                pattern: "email",
                required: true
            }
        ];

        let validator = new Validator();
        let errors = validator.validate(data, rules);
        expect(errors.email.required).to.eq("必填");
        expect(errors.email.pattern).to.not.exist;
    });

    it("require & minLength", () => {
        let data = {
            email: ""
        };
        let rules = [
            {
                key: "email",
                pattern: "email",
                minLength: 6
            }
        ];

        let validator = new Validator();
        let errors = validator.validate(data, rules);
        // 如果你有2个错，会返回2个错误
        expect(errors.email.minLength).to.exist;
        expect(errors.email.pattern).to.exist;
    });

    it("maxLength", () => {
        let data = {
            email: "123123123123123"
        };
        let rules = [
            {
                key: "email",
                pattern: "email",
                maxLength: 10
            }
        ];

        let validator = new Validator();
        let errors = validator.validate(data, rules);
        // 如果你有2个错，会返回2个错误
        expect(errors.email.maxLength).to.eq("太长");
        expect(errors.email.pattern).to.exist;
    });

    it("many keys", () => {
        let data = {
            email: "123123123123123"
        };

        let rules = [
            {
                key: "email",
                required: true,
                minLength: 5,
                maxLength: 20,
                hasNumber: true,
                hasLowerCaseAndUpperCase: true,
                hasDot: true,
                hasUnderscore: true,
                hasFrank: true
            }
        ];
        let fn = () => {
            let validator = new Validator();
            let errors = validator.validate(data, rules);
        };
        // 到hasNumber，由于没有该校验器，就报错了，后面就不再执行
        expect(fn).to.throw("不存在的校验器hasNumber");
    });

    it("测试用户自己添加一个自定义校验器", () => {
        let data = {
            email: "abcdef"
        };

        let rules = [
            {
                key: "email",
                required: true,
                hasNumber: true
            }
        ];
        let errors;
        let fn = () => {
            let validator = new Validator();
            validator.hasNumber = value => {
                if (!/\d/.test(value)) {
                    return "必须含有数字";
                }
            };
            errors = validator.validate(data, rules);
        };
        // 测试用户是否可以添加校验器
        expect(fn).to.not.throw();
        expect(errors.email.hasNumber).to.eq("必须含有数字");
    });

    it("2个validator互相不会影响", () => {
        let data = {
            email: "abcdef"
        };
        let rules = [
            {
                key: "email",
                required: true,
                hasNumber: true
            }
        ];

        let validator1 = new Validator();
        let validator2 = new Validator();
        validator1.hasNumber = value => {
            if (!/\d/.test(value)) {
                return "必须含有数字";
            }
        };
        expect(() => {
            validator1.validate(data, rules);
        }).to.not.throw();
        expect(() => {
            validator2.validate(data, rules);
        }).to.throw();
    });

    it("支持用add全局添加校验器", () => {
        let data = {
            email: "abcdef"
        };
        let rules = [
            {
                key: "email",
                required: true,
                hasNumber: true
            }
        ];

        let validator1 = new Validator();
        let validator2 = new Validator();
        Validator.add("hasNumber", value => {
            if (!/\d/.test(value)) {
                return "必须含有数字";
            }
        });
        expect(() => {
            validator1.validate(data, rules);
        }).to.not.throw();
        expect(() => {
            validator2.validate(data, rules);
        }).to.not.throw();
    });
});
