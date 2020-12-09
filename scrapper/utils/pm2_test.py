#!../scrapper/bin/python
# -*- coding: utf-8 -*-

import logging

logging.basicConfig(filename='pm2_logger.log',level=logging.INFO, format="%(levelname)s:%(asctime)s:%(message)s")

logging.info("Script starting")
logging.info("Script done")