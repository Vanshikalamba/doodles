#Learning React

index.html :(create html tag using js):

 <script>
    // const data= React.createElement("h1",{},"Hii , Shashwat");
    // const root=ReactDOM.createRoot(document.getElementById("root"));
    // root.render(data);
    
   const data= document.createElement("h1")
   data.innerHTML= "Hii I am vanshika";
   document.getElementById("root").appendChild(data);
    </script>

App.js:
const data = React.createElement("div", { id: "parent" }, [
React.createElement("h4", { id: "child" }, "Hii , Alihgjg"),
React.createElement("h5", { id: "child2" }, "Hii , Aliya"),
]);
console.log(data);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(data);

#Parcel
-Dev build
-local server
-HMR=hot module replacement
-File watching algo is used
-catching -Fast build
-image optimization
-minification
-bundling
-compress
-consistent hashing
-code splitting
-differential bundling
-https
-error handling
-diagnostic
-Tree Shaking-remove unused code

JSX:HTML Like syntax
-transpiled by babel before going to js engine
-if written in multiple lines , use () to wrap code

React Components : Functional &Class based(old)
