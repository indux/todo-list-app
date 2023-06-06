import React from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  return { item, saveItem, loading, error };
};

// const arrTodos = [
//   { text: "Estudiar", completed: true },
//   { text: "Merendar", completed: true },
//   { text: "Descansar", completed: false },
//   { text: "Proyectos", completed: false },
// ];
// localStorage.setItem("TODOS_V1", JSON.stringify(arrTodos));

export { useLocalStorage };
