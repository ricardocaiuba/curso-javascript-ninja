(function() {
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
  console.log(window);
})();
