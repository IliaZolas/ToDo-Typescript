"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.css");
var taskInput_1 = __importDefault(require("./components/taskInput"));
var taskList_1 = __importDefault(require("./components/taskList"));
function App() {
    return (<div className="App" style={{ width: "100%" }}>
        <h1>
          Todo App
        </h1>
        <div style={{ width: "500px", margin: "auto", alignContent: "center" }}>
          <taskInput_1.default />
          <taskList_1.default />
        </div>  
    </div>);
}
exports.default = App;
