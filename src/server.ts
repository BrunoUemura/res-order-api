import 'dotenv/config';
import server from './config/server-config';

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`Order running on port ${PORT}`);
});