const html = `<div id="foo" :class="cls></div>`;
// 编译器的作用就是把html转换成下面的渲染函数
function render() {
  //  return h("div", {id: "foo", class: "bar"});
  return {
    tag: "div",
    props: {
      id: "foo",
      class: cls,
    },
    //假设数字1代表class是动态的
    patchFlags: 1,
  };
}

render();
