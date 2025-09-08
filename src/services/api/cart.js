import { baseUrl } from '../index';

export const getCartItems = async () => {
  try{
    const response = await fetch(`${baseUrl}/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('auth-token')
      },
    });
    if (response.ok) {
      return response.json();
    }else {
      throw new Error('Failed to fetch products');
    }
  } catch (error) {
    console.error(error);
  }
}

export const addToCartItems = async (productId, quantity) => {
  try {
    const response = await fetch(`${baseUrl}/add-to-cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('auth-token')
      },
      body: JSON.stringify({ productId, quantity })
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

export const updateCartItem = async (productId, quantity) => {
  try {
    const response = await fetch(`${baseUrl}/update-cart-item`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('auth-token')
      },
      body: JSON.stringify({ productId, quantity })
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to fetch products');
    }
  } catch (error) {
    console.error(error);
  }
}

export const deleteCartItem = async (productId) => {
  try {
    const response = await fetch(`${baseUrl}/delete-cart-item`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('auth-token')
      },
      body: JSON.stringify({ productId })
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to fetch products');
    }
  } catch (error) {
    console.error(error);
  }
}
