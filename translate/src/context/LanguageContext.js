//The purpose of this file is to create a context object and expor it
//It  is in a separate file because that way we can import it only in the components that we care about
import React from "react";
export default React.createContext("english");

//this is the only thing that we have to do to create a context object, the changenlle is to understand how to pass the data because there are 2 sources of data that we can use and 2 ways of consuming it

//'english' is the default value that we are passing

//To change the value we need to create a component that will act as our source of information, in this case is the App component
//And to communicate the data from our source component to the context object we will create a provider component (not same provider that we used with react-redux)
