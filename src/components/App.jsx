import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchArea  from "./SearchArea";


function App() {
    return(
        
        <div className="App">
            <Header />
            <SearchArea />
            <Footer />
        </div>
    
    );
}

export default App;