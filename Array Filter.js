<!DOCTYPE html>
<html lang="en">
  <head>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <title>React App</title>

  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      const App = () => {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        return (
          <>
            <h1>ES6 Array Iteration Methods</h1>
            {/* iterate over array here */}
          </>
        );
      };

      const rootElement = ReactDOM.createRoot(document.getElementById("root"));
      rootElement.render(<App />);
    </script>

  </body>
</html>
