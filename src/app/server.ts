import app from './app'
import { PORT } from '../infrasestructure/@shared/config/env-manager'

import { logger } from '../infrasestructure/@shared/config/logger'


app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
})