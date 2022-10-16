import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function HomePage() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function Hello() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Hello</h2>
    </div>
  );
}

function App() {
  return (
      <BrowserRouter>
          <main>
              <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/hello" element={<Hello/>}/>
              </Routes>
          </main>
      </BrowserRouter>
  );
}

export default App;