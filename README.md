# Product Catalog App

## Summary

- Product Catalog App using DummyJSON API
- Contains: List, Detail, Search

## How to run?

### Prerequisites
- Node.js
- Expo Go (mobile app)
- Expo Account (to log in to Expo Go)

### Clone the repository:
```bash
git clone https://github.com/PotatoSoKawaii/product-catalog-react-native.git
cd product-catalog-react-native
npm install
```
### Environment Configuration:
Copy the .env.template file to .env:
```bash
cp .env.template .env
```
### Run the application
1) Log in to Expo on CLI

```bash
npx expo login
```
Enter your credentials when prompted.

2) Open Expo Go on your mobile and sign in to the same account.

3) Start the server
```bash
npx expo start
```
Scan the QR code displayed in the terminal.

## App Requirements

- Product listing with title, thumbnail, and price
- Pagination: Load more using `skip`
- Product detail: tap product => description, price, rating, images
- States: loading, error, empty, and success states
- Search: debounce (client/endpoint)
- Code Organization: clean separation between UI and data responsibilities

### Extra Features
- pull to refresh
- image loading placeholder / error handling
- small ui/ux detail
- unit testing

## Tech Stack and Tools

- React Native
- Expo
- TypeScript
- React Navigation
- TanStack Query
- Axios
- NativeWind
- Jest
- React Native Testing Library
- Postman

### Expo

Allows the application to be tested quickly on both iOS and Android devices

### TypeScript

Provides compile time type checking for application logic

### TanStack Query

TanStack Query provides caching, loading/error states and pagination without requiring the product data
to be stored in a client side state.

### NativeWind

Transferrable skills from web development (Tailwind CSS) while working on Mobile Development using React Native.

### Jest / React Native Testing Library

Verify application and data behavior.

### Postman

Test and verify API Endpoint response data and errors

## Search box product filtering
Using debounce on server side search through the endpoint to reduce unnecessary API calls where it fetch only necessary data instead of fetching all data and do a filtering from client side which may 

## AI Usage
AI usage was primarily used on assisting in transitioning from web to mobile development. For example: Tailwind (NativeWind), React Router (React Navigation), Mobile Architecture

## TODO
- ~~Init React Navigation~~
- ~~Configure Navigation~~
- ~~Configure API~~
- ~~Add Product List~~
- ~~Product List: Pagination~~
- ~~Product List: title, thumbnail, price~~
- ~~Add Product Detail~~
- ~~Product Detail: description, price, rating, images~~
- ~~Add search~~
- ~~Search: debounce~~
- ~~Add state handling: loading, error empty, success~~
- ~~Pull to refresh~~
- Image loading placeholder and error handling
- Unit test