const obj = {
  tag: "div",
  children: [{ tag: "span", children: "hello world" }],
};

function Render(obj, root) {
  const el = document.createElement(obj.tag);
  if (typeof obj.children === "string") {
    const text = document.createTextNode(obj.children);
    el.appendChild(text);
  } else {
    obj.children.forEach((child) => {
      Render(child, el);
    });
  }

  root.appendChild(el);
}
// 渲染到body下
Render(obj, document.body);

const html = ` <div>
  <span>hello world</span>
</div>`;
// Compiler相当于将html转换成上面的obj
const obj2 = Compiler(html);
Render(obj2, document.body);
