const data = React.createElement("div", { id: "parent" }, [
  React.createElement("h4", { id: "child" }, "Hii , Aliya"),
  React.createElement("h5", { id: "child2" }, "Hii , Aliya"),
]);
console.log(data);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(data);
