const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


