
import requests
import datetime
import json
import xml.etree.ElementTree as ET
import sys


def check_if_new():
    with open("static/profil.json", encoding='utf8') as file:
        config_json = json.load(file)
    
    podcast_thumbs = {}
    podcasts = ["mordlust",
                "verbrechen",
                "zeit_verbrechen",
                "zeit_pfarrerstoechter"]

    for podcast in podcasts:
        if len(
            get_podcast_len(
                podcast)) > config_json[podcast]["current_episodes"]:
                podcast_thumbs[podcast] = f"static/{podcast}_nc_logo.png"
        else:
            podcast_thumbs[podcast] = f"static/{podcast}_logo.png"
    return podcast_thumbs

def get_podcast_len(podcast_name):

    if podcast_name == "mordlust":
        URL = "https://rss.nexx.cloud/F0RCEXPNYW8MKX8"
    elif podcast_name == "verbrechen":
        URL = "https://rss.art19.com/verbrechen-von-nebenan-true-crime"
    elif podcast_name == "zeit_verbrechen":
        URL = "https://verbrechen.podigee.io/feed/mp3"
    elif podcast_name == "zeit_pfarrerstoechter":
        URL = "https://unterpfarrerstoechtern.podigee.io/feed/mp3"

    r = requests.get(URL)
    root = ET.fromstring(r.text)

    in_channel = root[0].getchildren()
    all_items = []

    for item in in_channel:
        if item.tag == "item":
            all_items.append(item)

    podcast_folgen = []

    if podcast_name == "mordlust":
        all_items = reversed(all_items)

    for item in all_items:
        folge = {}
        _id = str(len(podcast_folgen))
        folge["id"] = _id
        folge["onclick"] = 'more_infos_' + _id + '()'
        folge["function"] = "function " + folge["onclick"]

        
        folge["inner_function"] = """let more_infos_div_""" + _id + """ = document.getElementById("more_infos_text_""" + _id + """")
                            if (more_infos_div_""" + _id + """.style.height === "auto") {
                                more_infos_div_""" + _id + """.style.height = "0px"
                                more_infos_div_""" + _id + """.style.visibility = "hidden"
                                more_infos_div_""" + _id + """.style.paddingTop = "15px"
                                more_infos_div_""" + _id + """.style.marginBottom = "0px"
                            } else {
                                more_infos_div_""" + _id + """.style.height = "auto"
                                more_infos_div_""" + _id + """.style.visibility = "visible"
                                more_infos_div_""" + _id + """.style.paddingTop = "25px"
                                more_infos_div_""" + _id + """.style.marginBottom = "10px"
                            }"""


        if podcast_name != "zeit_verbrechen" and podcast_name != "zeit_pfarrerstoechter":
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
                
    #podcast_folgen.append(folge)
        else:
            for node in item:
                if node.tag == "title":
                    folge["subtitle"] = node.text
                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                    folge["nr"] = "#" + node.text
                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}summary":
                    folge["description"] = node.text
                elif node.tag == "enclosure":
                    folge["url"] = node.attrib["url"]
                elif node.tag == "pubDate":
                    folge["publish"] = node.text[:16]
                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                    folge["duration"] = "0" + str(datetime.timedelta(seconds=int(node.text)))
            
        podcast_folgen.append(folge)

    return podcast_folgen

def get_podcast_infos(podcast_name):

    if podcast_name == "mordlust":
        URL = "https://rss.nexx.cloud/F0RCEXPNYW8MKX8"
    elif podcast_name == "verbrechen":
        URL = "https://rss.art19.com/verbrechen-von-nebenan-true-crime"
    elif podcast_name == "zeit_verbrechen":
        URL = "https://verbrechen.podigee.io/feed/mp3"
    elif podcast_name == "zeit_pfarrerstoechter":
        URL = "https://unterpfarrerstoechtern.podigee.io/feed/mp3"

    r = requests.get(URL)
    root = ET.fromstring(r.text)

    in_channel = root[0].getchildren()
    all_items = []

    for item in in_channel:
        if item.tag == "item":
            all_items.append(item)

    podcast_folgen = []

    if podcast_name == "mordlust":
        all_items = reversed(all_items)

    for item in all_items:
        folge = {}
        _id = str(len(podcast_folgen))
        folge["id"] = _id

        if podcast_name != "zeit_verbrechen" and podcast_name != "zeit_pfarrerstoechter":
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
                
    #podcast_folgen.append(folge)
        else:
            for node in item:
                if node.tag == "title":
                    folge["subtitle"] = node.text
                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                    folge["nr"] = "#" + node.text
                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}summary":
                    folge["description"] = node.text
                elif node.tag == "enclosure":
                    folge["url"] = node.attrib["url"]
                elif node.tag == "pubDate":
                    folge["publish"] = node.text[:16]
                elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                    folge["duration"] = "0" + str(datetime.timedelta(seconds=int(node.text)))
            
        podcast_folgen.append(folge)

    # with open("static/profil.json", encoding='utf8') as file:
    #     config_json = json.load(file)
    # config_json[podcast_name]["current_episodes"] = len(podcast_folgen)

    # with open("static/profil.json", "w", encoding='utf8') as file:
    #     json.dump(config_json, file, ensure_ascii=False)

    print(json.dumps([podcast_folgen], ensure_ascii=False).encode('utf8').decode())
    sys.stdout.flush()

get_podcast_infos("mordlust")
