from scrapper_funcs import (get_xml_from, verbrechen, mordlust, 
zeit_verbrechen, darfs_ein_bisschen_mord_sein, 
verbrechen_der_vergangenheit, revisiting_sunnydale, 
zeit_pfarrerstoechter, rescherschen_und_arschiv, spezialgelagerter_sonderpodcast,
eine_stunde_history, ndr_corona_update)

import os
from pymongo import MongoClient
from dotenv import load_dotenv
load_dotenv()

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
    ]

def insert_in_databank(collection_name, podcasts_to_insert):
    client = MongoClient(URI)
    db = client[DATABASE_NAME]
    podcast_collection = db[collection_name]
    last_updated_collection = db["lastUpdated"]
    current_milli_time = lambda: int(round(time.time() * 1000))
    insert = 0
    for podcast in podcasts_to_insert:
        if podcast_collection.find_one({"id" : podcast["id"]}) == None:
            podcast_collection.insert_one(podcast)
            last_updated_collection.update_one({"podcast": collection_name}, [{"$set": {"lastUpdated": "$$NOW"}}])
            insert += 1

    print(f"done inserting {collection_name} with {insert} inserts!")


for index, podcasts in enumerate(PODCASTS):

    db_name = PODCASTS[index][0]
    scrapp_function = PODCASTS[index][1]
    url_to_scrapp = PODCASTS[index][2]

    all_items_from_xml = get_xml_from(url_to_scrapp)
    all_podcasts_from_items = scrapp_function(all_items_from_xml)

    insert_in_databank(db_name, all_podcasts_from_items)
