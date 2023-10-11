enum Methodology {
  WATERFALL = "WATERFALL",
  AGILE = "AGILE",
}

const Products = [
  {
    "productName": "Product test 1",
    "productOwnerName": "Lisa",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 2",
    "productOwnerName": "John",
    "scrumMasterName": "Sarah",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.WATERFALL,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 1 },
      { id: 13 },
    ]
  },
  {
    "productName": "Product test 3",
    "productOwnerName": "Jessica",
    "scrumMasterName": "Olivia",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 9 }
    ]
  },
  {
    "productName": "Product test 4",
    "productOwnerName": "Daniel",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 5",
    "productOwnerName": "Grace",
    "scrumMasterName": "Lily",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 6",
    "productOwnerName": "Mia",
    "scrumMasterName": "Alexander",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 7",
    "productOwnerName": "John",
    "scrumMasterName": "Lisa",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 1 },
      { id: 21 },
      { id: 19 },
    ]
  },
  {
    "productName": "Product test 8",
    "productOwnerName": "Liam",
    "scrumMasterName": "Ethan",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.WATERFALL,
    "location": "1213123",
    "developers": [
      { id: 9 },
      { id: 14 }
    ]
  },
  {
    "productName": "Product test 9",
    "productOwnerName": "William",
    "scrumMasterName": "Avery",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.WATERFALL,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 7 }
    ]
  },
  {
    "productName": "Product test 10",
    "productOwnerName": "Chloe",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
    ]
  },
  {
    "productName": "Product test 11",
    "productOwnerName": "Benjamin",
    "scrumMasterName": "Lucas",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 11 },
      { id: 3 }
    ]
  },
  {
    "productName": "Product test 12",
    "productOwnerName": "Ella",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.WATERFALL,
    "location": "1213123",
    "developers": [
      { id: 21 },
    ]
  },
  {
    "productName": "Product test 13",
    "productOwnerName": "Lucas",
    "scrumMasterName": "William",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 12 },
      { id: 19 },
      { id: 11 },
      { id: 18 },
    ]
  },
  {
    "productName": "Product test 14",
    "productOwnerName": "Matthew",
    "scrumMasterName": "Sophia",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.WATERFALL,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 15",
    "productOwnerName": "Sarah",
    "scrumMasterName": "Michael",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
    ]
  },
  {
    "productName": "Product test 16",
    "productOwnerName": "Daniel",
    "scrumMasterName": "Joseph",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 21 },
      { id: 16 }
    ]
  },
  {
    "productName": "Product test 17",
    "productOwnerName": "Alexander",
    "scrumMasterName": "Joseph",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 17 },
    ]
  },
  {
    "productName": "Product test 18",
    "productOwnerName": "William",
    "scrumMasterName": "Sophia",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 33 },
      { id: 6 },
      { id: 12 },
      { id: 21 },
      { id: 37 },
    ]
  },
  {
    "productName": "Product test 19",
    "productOwnerName": "Chloe",
    "scrumMasterName": "Liam",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 37 },
    ]
  },
  {
    "productName": "Product test 20",
    "productOwnerName": "Liam",
    "scrumMasterName": "Mason",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 37 },
      { id: 12 }
    ]
  },
  {
    "productName": "Product test 21",
    "productOwnerName": "Jackson",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 22",
    "productOwnerName": "Daniel",
    "scrumMasterName": "Ella",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 23",
    "productOwnerName": "Joseph",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 24",
    "productOwnerName": "Charlotte",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 25",
    "productOwnerName": "Charlotte",
    "scrumMasterName": "Lily",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 26",
    "productOwnerName": "Alexander",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 27",
    "productOwnerName": "Mia",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.WATERFALL,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 28",
    "productOwnerName": "Chloe",
    "scrumMasterName": "Alexander",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.WATERFALL,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 29",
    "productOwnerName": "Samuel",
    "scrumMasterName": "Daniel",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 30",
    "productOwnerName": "Lily",
    "scrumMasterName": "Charlotte",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 31",
    "productOwnerName": "Chloe",
    "scrumMasterName": "Mason",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.WATERFALL,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 32",
    "productOwnerName": "Lucas",
    "scrumMasterName": "Harper",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 33",
    "productOwnerName": "Ava",
    "scrumMasterName": "Joseph",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 34",
    "productOwnerName": "John",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 35",
    "productOwnerName": "Lucas",
    "scrumMasterName": "Emily",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 36",
    "productOwnerName": "Mason",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 37",
    "productOwnerName": "Avery",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
  {
    "productName": "Product test 38",
    "productOwnerName": "Olivia",
    "scrumMasterName": "Emily",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 12 },
      { id: 6 },
      { id: 16 },
      { id: 23 },
    ]
  },
  {
    "productName": "Product test 39",
    "productOwnerName": "Charlotte",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.WATERFALL,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 },
      { id: 6 },
    ]
  },
  {
    "productName": "Product test 40",
    "productOwnerName": "Chloe",
    "scrumMasterName": "Benjamin",
    "startDate": "2023-10-09T17:10:36.357Z",
    "methodology": Methodology.AGILE,
    "location": "1213123",
    "developers": [
      { id: 2 },
      { id: 6 }
    ]
  },
]

export default Products;