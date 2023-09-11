//sk_test_51Np4x8SJ8erA3CeiRqnCkUj3V8Uo5HQuXYRuVL4Ucj79Ausct5ReadV9fHBk4ynBxvzmWVK0sQEIeSt2lQ76PNFV00tkUSvRJk
//Coffee : price_1Np57pSJ8erA3CeinaLlSels
//Sunglasses : price_1Np59jSJ8erA3Ceiy3AylY1p
//Camera: price_1Np5BJSJ8erA3CeiBbeRA4ni 

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")('sk_test_51Np86hDKizImoqlpAPcACxyowbARB0eFmFc6w34aUMUiNC34VCx2s2tcMlGVZbdHBA6ZfgF3s8RW1SkV6A7zYZDy00SwI2vaxs');

const app = express()
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push(
      {
        price: item.id,
        quantity: item.quantity
      }
    )
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode:'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel'
  });

  res.send(JSON.stringify({
    url: session.url
  }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));

