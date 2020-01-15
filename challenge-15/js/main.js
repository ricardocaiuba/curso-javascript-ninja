(function () {
    console.log("--------------- [ this ] ---------------");
    var myObject = {
        myProperty: 1,
        init: function init() {
            return this.myProperty;
        }
    };
    console.log(myObject);
    console.log("init: ", myObject.init());

    console.log("--------------- [ this em funções ] ---------------");
    function myFunctions() {
        return this;
    }
    console.log("myFunctions: ", myFunctions(), window === myFunctions());

    var myObjectWithThis = {
        myProperty: 17,
        init: function init() {
            return this;
        }
    };
    console.log("myObjectWithThis: ", myObjectWithThis.init(), myObjectWithThis.init() === myObjectWithThis);

    console.log("--------------- [ this construtores ] ---------------");
    var newObject = new Object();
    console.log("newObject: ", newObject, Object());

    function MyConstructor() {
        this.prop1 = "prop1";
        this.prop2 = "prop2"
    }

    console.log("MyConstructor(): ", new MyConstructor());

    var constructor = new MyConstructor();
    console.log("constructor: ", constructor.prop1);
    prop1 = "propriedade 1";
    console.log("prop1: ", prop1);
    console.log("prop1 com window: ", window.prop1);
    var prop2 = "propriedade 2";
    console.log("prop2: ", prop2);
    console.log("prop2 com window: ", window.prop2);

    console.log("--------------- [ arguments ] ---------------");

    function myFunctionWithArguments() {
        return arguments;
    }
    console.log("myFunctionWithArguments: ", myFunctionWithArguments);
    console.log("myFunctionWithArguments(): ", myFunctionWithArguments());

    function myFunctionWithArguments2(arg1, arg2) {
        return arguments[0];
    }
    console.log(myFunctionWithArguments2(5, 4));

    function myFunctionWithArguments3() {
        return arguments[1];
    }
    console.log(myFunctionWithArguments3(5, 4));


    function myFunctionWithArguments3() {
        return arguments;
    }
    console.log(myFunctionWithArguments3(5, 4, 4, 5, 6, 7, 8, 9, 10));







})();
