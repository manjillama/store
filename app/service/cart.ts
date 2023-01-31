import Joi from "joi";

const cartItemSchema = Joi.object({
  size: Joi.string().allow(null, ""),
  quantity: Joi.number(),
  price: Joi.number(),
  totalPrice: Joi.number(),
  product: Joi.object({
    id: Joi.number(),
    name: Joi.string(),
    slug: Joi.string(),
    price: Joi.number(),
    comparePrice: Joi.number(),
    images: Joi.array().items(
      Joi.object({
        url: Joi.string(),
      }).unknown()
    ),
  }).unknown(),
});

const cartSchema = Joi.object({
  expiry: Joi.date(),
  items: Joi.array().items(cartItemSchema).required(),
});

export const addItemToCart = (cartItem: any) => {
  try {
    const cartStr = localStorage.getItem("cart");
    let cart = JSON.parse(cartStr as string);

    const { error } = cartSchema.validate(cart);

    if (error) return createNewCart();

    var today = new Date();
    today.setHours(today.getHours() + 1);
    cart = {
      expiry: today.getTime(),
      items: [...cart.items, cartItem],
    };
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
  } catch (ex) {
    return createNewCart();
  }
};

export const getCart = () => {
  try {
    const cartStr = localStorage.getItem("cart");

    let cart = JSON.parse(cartStr as string);
    const { error } = cartSchema.validate(cart);

    if (error || new Date().getTime() > cart.expiry) return createNewCart();

    return cart;
  } catch (ex) {
    return createNewCart();
  }
};

function createNewCart() {
  var today = new Date();
  today.setHours(today.getHours() + 1);

  let cart = {
    expiry: today.getTime(),
    items: [],
  };

  localStorage.setItem(
    "cart",
    JSON.stringify({
      expiry: today.getTime(),
      items: [],
    })
  );
  return cart;
}

export function resetCart() {
  createNewCart();
}

export function removeFromCartUsingIndex(index: number) {
  try {
    const cartStr = localStorage.getItem("cart");
    let cart = JSON.parse(cartStr as string);

    const { error } = cartSchema.validate(cart);

    if (error) return createNewCart();

    var today = new Date();
    today.setHours(today.getHours() + 1);

    if (index > -1) {
      cart.items.splice(index, 1);
    }

    cart = {
      expiry: today.getTime(),
      items: cart.items,
    };
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
  } catch (ex) {
    return createNewCart();
  }
}
