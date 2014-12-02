def indexDicts(dict_array, key):
    index = {}
    for d in dict_array:
        index[d[key]] = d        
    return index
