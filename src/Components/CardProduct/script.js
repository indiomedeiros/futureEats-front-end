export const addFoodCart = (food, setSelect, setCount, restaurant, count) => {
  setSelect(false);
  const newFood = { ...food, count: Number(count) };

  if (localStorage.getItem("buyFood")) {
    const arrayBuyFood = JSON.parse(localStorage.getItem("buyFood"));
    const valueFood = arrayBuyFood.products.findIndex(
      (food) => food.id === newFood.id
    );

    if (valueFood > -1) {
      arrayBuyFood.products[valueFood].count += Number(count);
      localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
    } else {
      const arrayBuyFood = JSON.parse(localStorage.getItem("buyFood"));
      if (restaurant.id === arrayBuyFood.restaurant.id) {
        arrayBuyFood.products.push(newFood);
        localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
      } else {
        alert("seu carrinho já contém um item de outro restaurante");
        setCount(0);
      }
    }
    // seta a primeira vez
  } else {
    const arrayBuyFood = {
      products: [newFood],
      restaurant: restaurant,
    };
    localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
  }
};

export const RemoveFoodCart = (food, setCount) => {
  setCount(0);
  const arrayBuyFood = JSON.parse(localStorage.getItem("buyFood"));
  const newArrayFood = arrayBuyFood.products.filter((item) => {
    return item.id !== food.id;
  });
  arrayBuyFood.products = newArrayFood;
  if (arrayBuyFood.products.length === 0) {
    localStorage.removeItem("buyFood");
  } else {
    localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
  }
};
