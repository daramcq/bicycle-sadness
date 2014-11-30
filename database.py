import MySQLdb
import MySQLdb.cursors
from config import *

def connectDB(host=DB_HOST, user=DB_USER, password=DB_PASS, db=DB): 
    db = MySQLdb.connect(host, user, password, db, cursorclass=MySQLdb.cursors.DictCursor)
    return db

def loadAllIncidents(db=None):    
    if db is None:
        db = connectDB()
    cursor = db.cursor()
    sql = """ SELECT inc.acc_id, inc.severity, inc.vehicle, inc.lat, inc.lng FROM incident AS inc  """
    cursor.execute(sql)
    incidents = cursor.fetchall()
    return incidents
