#!/usr/bin/env python
# -*- coding: utf-8 -*-

from scrapper_funcs import (get_xml_from, verbrechen, mordlust, 
zeit_verbrechen, darfs_ein_bisschen_mord_sein, 
verbrechen_der_vergangenheit, revisiting_sunnydale, 
zeit_pfarrerstoechter, rescherschen_und_arschiv, spezialgelagerter_sonderpodcast,
eine_stunde_history, ndr_corona_update, your_wrong_about, apokalypse_und_filterkaffee)

import logging
import telegram
import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()
logging.basicConfig(filename='scrapper.log',level=logging.INFO, format="%(levelname)s:%(asctime)s:%(message)s")

DATABASE=os.getenv("DATABASE")
PASSWORD=os.getenv("PASSWORD")
CLUSTER=os.getenv("CLUSTER")
URI = f'mongodb+srv://{DATABASE}:{PASSWORD}@{CLUSTER}/podcasts?retryWrites=true&w=majority'
DATABASE_NAME = "podcasts"
PODCASTS = [
    ["verbrechen-von-nebenan", verbrechen, "https://rss.art19.com/verbrechen-von-nebenan-true-crime"],
    ["mordlust", mordlust, "https://rss.nexx.cloud/F0RCEXPNYW8MKX8"],
    ["zeit-verbrechen", zeit_verbrechen, "https://verbrechen.podigee.io/feed/mp3"],
    ["darfs-ein-bisschen-mord-sein", darfs_ein_bisschen_mord_sein, "https://cdn.stationista.com/feeds/darfs-ein-bisserl-mord-sein"],
    ["verbrechen-der-vergangenheit", verbrechen_der_vergangenheit, "https://rss.art19.com/verbrechen"],
    ["revisiting-sunnydale", revisiting_sunnydale, "https://revisitingsunnydale.libsyn.com/rss"],
    ["zeit-pfarrerstoechter", zeit_pfarrerstoechter, "https://unterpfarrerstoechtern.podigee.io/feed/mp3"],
    ["rescherschen-und-arschiv", rescherschen_und_arschiv, "https://rescherschen-und-arschiv.podigee.io/feed/aac"],
    ["spezialgelagerter-sonderpodcast", spezialgelagerter_sonderpodcast, "https://spezialgelagert.de/feed/podcast/"],
    ["eine-stunde-history", eine_stunde_history, "http://www.deutschlandfunknova.de/podcast/eine-stunde-history"],
    ["ndr-corona-update", ndr_corona_update, "https://www.ndr.de/nachrichten/info/podcast4684.xml"],
    ["your-wrong-about", your_wrong_about, "https://feeds.buzzsprout.com/1112270.rss"],
    ["apokalypse-und-filterkaffee", apokalypse_und_filterkaffee, "https://apokalypse-und-filterkaffee.podigee.io/feed/mp3"],
    ]



def insert_in_databank(collection_name, podcasts_to_insert):
    try:
        client = MongoClient(URI)
    except Exception as e:
        set_is_exception()
        logging.error(f"Databank connection for {collection_name} went wrong. Error: {e}")
        
    else:
        db = client[DATABASE_NAME]
        podcast_collection = db[collection_name]
        last_updated_collection = db["lastUpdated"]
        current_milli_time = lambda: int(round(time.time() * 1000))
        insert = 0
        for podcast in podcasts_to_insert:
            if podcast_collection.find_one({"id" : podcast["id"]}) == None:
                try:
                    podcast_collection.insert_one(podcast)
                    last_updated_collection.update_one({"podcast": collection_name}, [{"$set": {"lastUpdated": "$$NOW"}}])
                    insert += 1
                except Exception as e:
                    set_is_exception()
                    logging.error(f"Error while inserting into {collection_name} databank. Error: {e}")
                    

        logging.info(f"done inserting {collection_name} with {insert} inserts!")

def send_message_when_exception():
    if is_exception == True:
        TELEGRAM_TOKEN=os.getenv("TELEGRAM_TOKEN")
        CHAT_ID=os.getenv("CHAT_ID")
        URL=os.getenv("URL")
        bot = telegram.Bot(token=TELEGRAM_TOKEN)
        bot.send_message(chat_id=CHAT_ID, text=f'''There was an error while scrapping. Visit 
{URL}
for details.''')

logging.info("-------START SCRAPPER-------")

def set_is_exception():
    global is_exception
    is_exception = True

is_exception = False
for index, podcasts in enumerate(PODCASTS):

    db_name = PODCASTS[index][0]
    scrapp_function = PODCASTS[index][1]
    url_to_scrapp = PODCASTS[index][2]

    try:
        all_items_from_xml = get_xml_from(url_to_scrapp)
    except Exception as e:
        set_is_exception()
        logging.error(f"An error occured for get request {db_name}. Error message: {e}")
    else:
        try:
            all_podcasts_from_items = scrapp_function(all_items_from_xml)
        except Exception as e:
            set_is_exception()
            logging.error(f"An error occured while scrapping {db_name}. Error message: {e}")
        else:
            insert_in_databank(db_name, all_podcasts_from_items)

if is_exception: send_message_when_exception()