// react uses a combination of dependancies to build large, scalable applications, quickly and painlessly.
// react provides a specific way to organize and teh structure the design of a web application.
// Using JSX an extension of javascript we can write code that is similar syntax that similat to that of html
// this snippeds of JSX codes are separeated out into components.the use of components lets us seperate code and functionality in a logical
// and easy to read way producing highly reusable independent chunks.

// Key features of React 
/* 1. Declarative 
    2. Component-Based
    3. Learn Once, Write Anywhere.


    1. DECLARATIVE 
    Imparative progamming - Explicit describes the actions a program shoulf take, aeach step of the way 
    Describe how a program should go about doing those actions
    Declarative programming - Describea what a prohram should accomplish or what the end result shou;d be
    leaves the determination of how to get the end result up to the program.
      
 Creating DOM elements without a framework like reacts tends to be imperative operation.
 React however encourages a declarative approach to working wiht the DOM.We don not describe how to update the browser,
 instead we provide React with a template of what the component should lloj like once it it finished being prepared.
    */
//     example of creting DOM elements without a framework
const header = document.createElement("h1");
header.textContent = "Hi!";
header.className = "main";

const container = document.querySelector("#container");
container.append(header);

// example with JSX syntax.- where we do not descirbe how to update the browser but rather 
// provide React a template of what the component should look like once it is finished being prepared.

const header=<h1 className="main">Hello from React1</h1>
ReactDOM.render(header, document.querySelector("#container"));

// the JSX syntax example is declarative programming with react.
// it was not indicated whether to add or delete a node in the DOM.


// COMPONENT BASED.
/*  React encourages that an application be structures: building blocks of our web page that handle their own dta 
 UI logic.individual components can be composed together with other components to put tohether a complete app.
   */

//  for example
function App(){
    return (
        <div>
            <NavBar/>
            <resultList>
                <resultItem result={reuslt1}/>
                <resultItem result={reuslt2}/>
             </resultList> 
            <map/>
         </div>
    )
}