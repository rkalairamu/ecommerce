🛍️ **eCommerce Application – Micro Frontend Architecture**

This application follows the Micro Frontend architecture, where each functional domain is developed and deployed independently, promoting scalability, modularity, and team autonomy.

📦 **packages/ecommerce – Master Application**

Acts as the host shell for all micro frontends.

Displays the product catalog.

Handles:

  Application layout and routing
  
  Global state management (e.g., auth, cart count)
  
  Shared libraries and dependencies
  
  Authentication and user session handling
  
  Dynamically loads child applications using Module Federation.

🛒 **packages/carts – Cart Microfrontend**

Manages and displays cart items.

Features:

  Add/remove/update items in the cart
  
  Display item count and total price
  
  Communicates with the master app for:
  
    Cart updates
    
    Badge notifications (e.g., cart item count)

📦 **packages/orders – Orders Microfrontend**

Displays order history of the logged-in user.

Features:

  View past orders
  
  Track current orders
  
  Reorder items
  
  Requires access to authentication context from the master app.

👤 **packages/profile – Profile Microfrontend**

Manages user account information.

Features:

  View and update personal details
  
  Manage addresses, email, password
  
  Logout or manage sessions
  
  Syncs with authentication and user state maintained by the master application.
