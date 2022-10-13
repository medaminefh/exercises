const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);


const App = () => {
    console.log(hello())
    return <h2>Hello world, from JSX</h2>
}


root.render(<App />);