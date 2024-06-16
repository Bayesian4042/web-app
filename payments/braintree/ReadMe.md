# Introduction
1. Braintree is a full-stack payment platform. It allows to accept online payments from the customers in your application or website.
2. It provides you all the services in one place, eliminating the nedd to separately setup payment gateways and merchant accounts.
3. Braintree is owned by paypal. It offers many products like Braintree direct, braintree extend, braintree marketplace etc. Each product offers different set of tools and services.

# Braintree Direct
1. it accepts , verify and process different payment methods. it has a SDK for both client and server. 
2. The client sdk securely collects payment from customers.
3. The server sdk enables tools to securely process collected payment information.

# Braintree workflow
1. the client request token to our server.
2. the server generated the token using sdk and sends to the client. the client uses this token to initialize the communication with braintree sever.
3. the client communicates the customer's payment information to braintree sever, which the server uses to generate payment method nonce. the nonce is sent back to the client.
4. The client sends the payment method nonce to our sever.
5. The server uses the payment method nonce to create the transaction.

# Client setup for braintree
1. Braintree provides sdks for android, ios and javascript. 

## Drop-in UI
1. Braintree drop-in UI is a complete checkout UI component that we can integrare into our custom applications to accepts payment securely. The interface includes usser to enter credit card deatils and options for quicker checkout through paypal, venmo, apple pay and google pay. 

# Server Setup for braintree
1. Braintree provides the server-side sdk in different langauges such as Java, PHP, python, node etc.

2. for node project: npm instaall braintree
3. 
