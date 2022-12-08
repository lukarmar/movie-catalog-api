import app from './app'

import { logger } from '../infrasestructure/@shared/config/logger'


app.listen(3030, () => {
  logger.info('Server started on port 3030');
})