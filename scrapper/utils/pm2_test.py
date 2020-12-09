#!../scrapper/bin/python
# -*- coding: utf-8 -*-

import logging
try:
    import telegram
except Exception as e:
    logging.error(e)

logging.basicConfig(filename='pm2_logger.log',level=logging.INFO, format="%(levelname)s:%(asctime)s:%(message)s")

logging.info("Script starting")
logging.info("Script done")