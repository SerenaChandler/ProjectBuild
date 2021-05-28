const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooksearch", { useNewUrlParser: true, useUnifiedTopology: true }
);


const bookSeed = [
  {
    volumeInfo:
    {
      authors: ["Arthur Miller"],
      description: "The play shows a series of chronological events which take place during one evening and the next day. At intervals throughout the play we see scenes from Willy's past enacted on the same stage set at the same time. On first consideration this seems more likely to confuse than reveal, but Miller had very strong reasons for staging the play in this way. Miller believes that the past is not something which is now behind us ... he says the past is with us all the time, informing and influencing our actions and choices. If we are to understand Willy, we must be aware of the emotional burdens and the formative influences which he carries with him from the past.",
      image: "https://books.google.com/books/content?id=VmJa4tLn0vMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "https://books.google.com/books?id=VmJa4tLn0vMC&dq=title:The+Hunger+Games&source=gbs_book_similarbooks",
      title: "Death of a Salesman",
    }
  }
]


db.Book.deleteMany({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
