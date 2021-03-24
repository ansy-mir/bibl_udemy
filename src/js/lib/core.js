// (() => {
//   const $ = function (selector) {
//     const elements = document.querySelectorAll(selector);
//     const obj = {};
    
//     obj.hide = () => {
//       elements.forEach(elem => {
//         elem.style.display = 'none';
//       });
//       return obj;
//     };

//     obj.show = () => {
//       elements.forEach(elem => {
//         elem.style.display = '';
//       });
//       return obj;
//     };

//     return obj;

//   };

//   window.$ = $;

// })();

const $ = function(selector) {
  
  return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
  
  if(!selector) {
    //Если не будет передан селектор, то вернется пустой объект. This в данном случае будет пустым объектом.
    return this;
  }
  //Если у того селектора, который передан, есть свойство tagName, то это будет HTML-элемент
  if(selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;

  return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;


