const express = require('express')
const productRoutes = require('./product_routes');
const userRouter = require('./user/user.router');
const { logRequest } = require('./middleware');
const bodyParser = require('body-parser');
const { errorResponder } = require('./error_middleware');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(logRequest);
app.use(productRoutes);
app.use(userRouter);
app.use(errorResponder);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
