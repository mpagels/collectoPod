import requests
import xml.etree.ElementTree as ET
import datetime

def get_xml_from(url):
    r = requests.get(url)
    root = ET.fromstring(r.text)

    in_channel = list(root[0])
    all_items = []
    for item in in_channel:
        if item.tag == "item":
            all_items.append(item)
    return all_items


def verbrechen(all_items):
    all_podcasts = []

    for item in all_items:
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "{http://purl.org/rss/1.0/modules/content/}encoded": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts

def mordlust(all_items):
    all_podcasts = []

    for item in reversed(all_items):
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}summary": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts

def zeit_verbrechen(all_items):
    all_podcasts = []

    for item in all_items:
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}summary": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts

def darfs_ein_bisschen_mord_sein(all_items):
    all_podcasts = []

    for item in all_items:
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "{http://purl.org/rss/1.0/modules/content/}encoded": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts

def verbrechen_der_vergangenheit(all_items):
    all_podcasts = []

    for item in all_items:
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "{http://purl.org/rss/1.0/modules/content/}encoded": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts

def revisiting_sunnydale(all_items):
    all_podcasts = []

    for item in all_items:
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "{http://purl.org/rss/1.0/modules/content/}encoded": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts

def zeit_pfarrerstoechter(all_items):
    all_podcasts = []

    for item in all_items:
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "{http://purl.org/rss/1.0/modules/content/}encoded": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts

def rescherschen_und_arschiv(all_items):
    all_podcasts = []

    for item in all_items:
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}summary": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts

def spezialgelagerter_sonderpodcast(all_items):
    all_podcasts = []

    for item in all_items:
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "{http://purl.org/rss/1.0/modules/content/}encoded": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts

def eine_stunde_history(all_items):
    all_podcasts = []

    for item in all_items:
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "description": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts

def ndr_corona_update(all_items):
    all_podcasts = []

    for item in all_items:
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "{http://purl.org/rss/1.0/modules/content/}encoded": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts

def your_wrong_about(all_items):
    all_podcasts = []

    for item in all_items:
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "{http://purl.org/rss/1.0/modules/content/}encoded": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts

def apokalypse_und_filterkaffee(all_items):
    all_podcasts = []

    for item in all_items:
        folge = {}
        for node in item:
            if node.tag == "guid":
                folge["id"] = node.text
            if node.tag == "title":
                folge["title"] = node.text
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}episode":
                folge["nr"] = "#" + node.text
            elif node.tag == "{http://purl.org/rss/1.0/modules/content/}encoded": #"{http://purl.org/rss/1.0/modules/content/}encoded":
                folge["description"] = node.text
            elif node.tag == "enclosure":
                folge["url"] = node.attrib["url"]
            elif node.tag == "pubDate":
                folge["publish"] = datetime.datetime.strptime(node.text,"%a, %d %b %Y %H:%M:%S %z")
            elif node.tag == "{http://www.itunes.com/dtds/podcast-1.0.dtd}duration":
                folge["duration"] = node.text
        all_podcasts.append(folge)
    
    return all_podcasts