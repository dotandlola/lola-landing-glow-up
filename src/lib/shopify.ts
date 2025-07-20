import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// Shopify store configuration
const SHOPIFY_DOMAIN = 'no-ordinary-no.myshopify.com';
const STOREFRONT_API_VERSION = '2025-07';

// Create Shopify Storefront API client (no access token needed for public data)
export const shopifyClient = createStorefrontApiClient({
  storeDomain: SHOPIFY_DOMAIN,
  apiVersion: STOREFRONT_API_VERSION,
});

// GraphQL queries
const GET_PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          featuredImage {
            url
            altText
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
          tags
        }
      }
    }
  }
`;

const GET_PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      featuredImage {
        url
        altText
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 5) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
          }
        }
      }
      tags
    }
  }
`;

// Types
export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  featuredImage?: {
    url: string;
    altText?: string;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }>;
  };
  tags: string[];
}

// Fetch products from Shopify
export async function getProducts(count: number = 10): Promise<ShopifyProduct[]> {
  try {
    const response = await shopifyClient.request(GET_PRODUCTS_QUERY, {
      variables: { first: count }
    });
    
    return response.data?.products?.edges?.map((edge: any) => edge.node) || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Fetch single product by handle
export async function getProductByHandle(handle: string) {
  try {
    const response = await shopifyClient.request(GET_PRODUCT_BY_HANDLE_QUERY, {
      variables: { handle }
    });
    
    return response.data?.productByHandle;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// Utility functions
export function formatPrice(amount: string, currencyCode: string): string {
  const price = parseFloat(amount);
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currencyCode,
  }).format(price);
}

export function getShopifyProductUrl(handle: string): string {
  return `https://${SHOPIFY_DOMAIN}/products/${handle}`;
}

export function getShopifyCheckoutUrl(variantId: string, quantity: number = 1): string {
  return `https://${SHOPIFY_DOMAIN}/cart/${variantId}:${quantity}`;
}

// Create cart permalink for direct checkout
export function createCartPermalink(items: Array<{ variantId: string; quantity: number }>): string {
  const cartItems = items.map(item => `${item.variantId}:${item.quantity}`).join(',');
  return `https://${SHOPIFY_DOMAIN}/cart/${cartItems}`;
}