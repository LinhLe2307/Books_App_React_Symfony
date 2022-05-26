export const handleIndividualData = (res) => {
  // If there are no date, images or title, make default value
  if (res.volumeInfo.hasOwnProperty("publishedDate") === false) {
    res.volumeInfo.publishedDate = "0000";
  }
  if (res.volumeInfo.hasOwnProperty("imageLinks") === false) {
    res.volumeInfo.imageLinks = {
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU",
    };
  }
  if (res.volumeInfo.hasOwnProperty("authors") === false) {
    res.volumeInfo.authors = "Unknown Authors";
  }

  if (res.saleInfo.hasOwnProperty("listPrice") === false) {
    res.saleInfo.listPrice = {
      amount: 9.8,
      currencyCode: "EUR"
    };
  }

  if (res.volumeInfo.hasOwnProperty("title") === false) {
    res.volumeInfo.title = "No Title";
  }
  return res;
};