import { baseUrl } from "../index";

export const getCategories = async () => {
  try {
    const response = await fetch(`${baseUrl}/categories`, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error("Failed to fetch products");
    }
  } catch (error) {
    console.error(error);
  }
};

export const addToCategories = async () => {
  try {
    const response = await fetch(`${baseUrl}/add-to-category`, {
      method: 'POST',
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to add item to cart');
    }
  } catch (error) {
    console.error(error);
  }
}



