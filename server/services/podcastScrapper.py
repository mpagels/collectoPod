import requests
import datetime
import json
import xml.etree.ElementTree as ET
import sys

def get_podcast_infos():
    
    podcasts_to_search = [{ 
        "crime" : [
            {"verbrechen" : "https://rss.art19.com/verbrechen-von-nebenan-true-crime"},
        {"mordlust" : "https://rss.nexx.cloud/F0RCEXPNYW8MKX8"},
        {"zeit_verbrechen":"https://verbrechen.podigee.io/feed/mp3"},
        {"darfs_ein_bisschen_mord_sein" : "https://cdn.stationista.com/feeds/darfs-ein-bisserl-mord-sein"},
        {"verbrechen_der_vergangenheit" : "https://rss.art19.com/verbrechen"}],
        "other" : [{
        "revisiting_sunnydale" : "https://revisitingsunnydale.libsyn.com/rss"},
        {"zeit_pfarrerstoechter" : "https://unterpfarrerstoechtern.podigee.io/feed/mp3"},
        {"rescherschen_und_arschiv" : "https://rescherschen-und-arschiv.podigee.io/feed/aac"}]
        }]
        # {"eine_stunde_history": "http://www.deutschlandfunknova.de/podcast/eine-stunde-history"}]
    #}]

    podcasts_to_send = {
        "crime" : [],
        "other" : []
    }

    for podcast in podcasts_to_search:
        for genre, list_of_obj_of_podcasts in podcast.items():
            for obj_of_podcast in list_of_obj_of_podcasts:
                podCast = {}
                for podcast, url in obj_of_podcast.items():
                    podcast_name = podcast
                    URL = url

                    podCast[podcast_name] = []

                    r = requests.get(URL)
                    root = ET.fromstring(r.text)

                    in_channel = list(root[0])
                    all_items = []
                    for item in in_channel:
                        if item.tag == "item":
                            all_items.append(item)

                    if podcast_name == "mordlust":
                        all_items = reversed(all_items)

                    for item in all_items:
                        folge = {}
                        _id = str(len(podCast[podcast_name]))
                        folge["id"] = _id

                        if (podcast_name != "zeit_verbrechen" 
                        and podcast_name != "zeit_pfarrerstoechter" 
                        and podcast_name != "darfs_ein_bisschen_mord_sein"
                        and podcast_name != "verbrechen_der_vergangenheit"):
                            for node in item:
                                if node.tag == "title":
                                    if node.text.startswith("#"):
                                        folge["nr"] = node.text.split(" ")[0]
                                        folge["subtitle"] = " ".join(node.text.split(" ")[1:])
                                    else:
                                        folge["nr"] = "SPEZIAL " + node.text
                                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}summary":
                                    folge["description"] = node.text
                                elif node.tag == "enclosure":
                                    folge["url"] = node.attrib["url"]
                                elif node.tag == "pubDate":
                                    folge["publish"] = node.text[:16]
                                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                                    folge["duration"] = node.text

                        elif (podcast_name == "darfs_ein_bisschen_mord_sein"
                         or podcast_name == "verbrechen_der_vergangenheit"
                         or podcast_name == "rescherschen_und_arschiv"):
                            for node in item:
                                if node.tag == "title":
                                    folge["subtitle"] = node.text
                                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                                    folge["nr"] = "#" + node.text
                                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}summary": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                                    folge["description"] = node.text
                                elif node.tag == "enclosure":
                                    folge["url"] = node.attrib["url"]
                                elif node.tag == "pubDate":
                                    folge["publish"] = node.text[:16]
                                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                                    folge["duration"] = node.text

                        elif podcast_name == "revisiting_sunnydale" :
                            for node in item:
                                if node.tag == "title":
                                    folge["nr"] = "#" + node.text.split(":").split(" ")[0]
                                    folge["subtitle"] = node.text.split(":")[1]
                                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}subtitle":
                                    folge["description"] = node.text
                                elif node.tag == "enclosure":
                                    folge["url"] = node.attrib["url"]
                                elif node.tag == "pubDate":
                                    folge["publish"] = node.text[:16]
                                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                                    folge["duration"] = node.text
                        else:
                            for node in item:
                                if node.tag == "title":
                                    folge["subtitle"] = node.text
                                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                                    folge["nr"] = "#" + node.text
                                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}summary": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                                    folge["description"] = node.text
                                elif node.tag == "enclosure":
                                    folge["url"] = node.attrib["url"]
                                elif node.tag == "pubDate":
                                    folge["publish"] = node.text[:16]
                                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                                    folge["duration"] = "0" + str(datetime.timedelta(seconds=int(node.text)))
                        
                        podCast[podcast_name].append(folge)
                    podcasts_to_send[genre].append(podCast)

    print(json.dumps([podcasts_to_send], ensure_ascii=False).encode('utf8').decode())
    sys.stdout.flush()

get_podcast_infos()
