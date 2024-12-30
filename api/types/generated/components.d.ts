import type { Schema, Struct } from '@strapi/strapi';

export interface EntitiesOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_entities_order_items';
  info: {
    displayName: 'Order item';
  };
  attributes: {
    price: Schema.Attribute.Decimal;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantities: Schema.Attribute.Integer;
    size: Schema.Attribute.String;
    totalPrice: Schema.Attribute.Decimal;
  };
}

export interface SizeProductSize extends Struct.ComponentSchema {
  collectionName: 'components_size_product_sizes';
  info: {
    displayName: 'Product size';
  };
  attributes: {
    size: Schema.Attribute.String & Schema.Attribute.Required;
    stock: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'entities.order-item': EntitiesOrderItem;
      'size.product-size': SizeProductSize;
    }
  }
}
