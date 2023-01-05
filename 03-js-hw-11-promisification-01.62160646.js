const e=e=>new Promise((o=>{setTimeout((()=>{o(e)}),e)})),o=e=>console.log(`Resolved after ${e}ms`);e(2e3).then(o),e(1e3).then(o),e(1500).then(o);
//# sourceMappingURL=03-js-hw-11-promisification-01.62160646.js.map
