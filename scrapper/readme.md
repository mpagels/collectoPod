# Python Scrapper

This script scrapps the podcast xmls for new content and insert it in a mongoDB database.

## Install

This was testet with python3.8.6 & python3.9

Please create a virtual enviroment to keep your root python clean.

```
python3 -m venv scrapper
```

This will create a directory "scrapper" where python will put a fresh python enviroment.

Now activate the enviroment and install requests and pymongo

activate:

```
source scrapper/bin/activate
```

You should see something like this in your terminal

```
(scrapper) <......>
```

install now requests, pymongo, dnspython and dotenv

```
pip install requests
```

```
pip install pymongo
```

```
pip install dnspython
```

```
pip install python-dotenv
```

## Run the scrapper

To run the srapper script simple run inside the scrapper root directory

```
python scrapper.py
```

Thats it!
