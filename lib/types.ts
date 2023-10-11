export default interface Product {
  productId: number;
  productNumber: string;
  productName: string;
  productOwnerName: string;
  developers: Developer[];
  scrumMasterName: string;
  startDate: string;
  methodology: string;
  location: string;
}

interface Developer {
  id: number;
  name: string;
}
