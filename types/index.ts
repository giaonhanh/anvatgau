// Type definitions for the ordering system

/**
 * Possible order statuses.
 */
export type OrderStatus = 'NEW' | 'COOKING' | 'DONE';

/**
 * Possible payment statuses.
 */
export type PaymentStatus = 'UNPAID' | 'PAID';

/**
 * Represents a food item available in the menu.
 */
export interface FoodItem {
  id: string;               // Unique identifier for the food item
  name: string;             // Name of the dish
  description: string;      // Detailed description
  price: number;            // Price in the chosen currency
  image: string;            // URL or path to an image
  category: string;         // Category such as "Appetizer", "Main", ...
  isAvailable: boolean;    // Availability flag
}

/**
 * Represents a single line item within an order.
 */
export interface OrderItem {
  foodId: string;           // Reference to the FoodItem.id
  foodName: string;         // Redundant copy of the food name for quick display
  quantity: number;         // Number of units ordered
  price: number;            // Price per unit at the time of order
  notes: string;            // Any special instructions or notes
}

/**
 * Represents a complete order.
 */
export interface Order {
  id: string;                       // Unique order identifier
  tableNumber: number;              // Table number associated with the order
  items: OrderItem[];               // List of ordered items
  totalAmount: number;              // Calculated total amount for the order
  status: OrderStatus;              // Current status of the order
  paymentStatus: PaymentStatus;    // Payment state of the order
  createdAt: Date;                  // Timestamp when the order was created
}
