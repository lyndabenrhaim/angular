#Imports
from typing import Optional
from fastapi import FastAPI , Request
import mysql.connector
import json
from fastapi.middleware.cors import CORSMiddleware
###################################################################
#Intialize
app = FastAPI()
origins = [
"null"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#####################################################################
#APIREST

@app.get("/login") 
def login(email : str, password : str): 
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "work")
    cursor = db.cursor()
    cursor.execute(f"SELECT * From Admin where email ='{email}' and password = '{password}' ")
    rv = cursor.fetchall()
    cursor.close()
    db.close()
    return True if rv!=[] else False

@app.get("/lister_postes") 
def lister_postes(): 
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "work")
    cursor = db.cursor()
    cursor.execute(f"SELECT * From poste")
    row_headers=[x[0] for x in cursor.description]
    rv = cursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    cursor.close()
    db.close()
    return json_data 

@app.post("/ajouter_candidature")
async def ajouter_candidature(email : str, msg : str): 
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "work")
    cursor = db.cursor()
    try:
        cursor.execute(f"INSERT into candidature (`email` , `msg`) VALUES ('{email}' , '{msg}')")
        db.commit()
        return(True)
    except:
        db.rollback()
        return(False)

@app.get("/lister_candidatures") 
def lister_candidatures(): 
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "work")
    cursor = db.cursor()
    cursor.execute(f"SELECT * From candidature")
    row_headers=[x[0] for x in cursor.description]
    rv = cursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    cursor.close()
    db.close()
    return json_data 

@app.delete("/supprimer_poste")
def supprimer_poste(id : int):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "work")
    cursor = db.cursor()
    try:
        cursor.execute(f"DELETE FROM poste where id_poste = {id}")
        db.commit()
        return(True)
    except:
        db.rollback()
        return(False)

@app.delete("/supprimer_candidature")
def supprimer_candidature(id : int):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "work")
    cursor = db.cursor()
    try:
        cursor.execute(f"DELETE FROM candidature where id_cand = {id}")
        db.commit()
        return(True)
    except:
        db.rollback()
        return(False)

@app.post("/ajouter_poste")
async def ajouter_poste(titre : str, societe : str, salaire : float): 
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "work")
    cursor = db.cursor()
    try:
        cursor.execute(f"INSERT INTO `poste` (`titre_poste`, `nom_societe`, `salaire`) VALUES ('{titre}' , '{societe}', '{salaire}')")
        db.commit()
        return(True)
    except:
        db.rollback()
        return(False)