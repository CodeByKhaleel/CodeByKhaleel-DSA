def sorted_squared(array):
    i = 0
    j = len(array)-1
    new_Array = [0]*len(array)
    for K in reversed(range(len(array))):
        sq_i = array[i]**2
        sq_j = array[j]**2
        if sq_i>sq_j:
            new_Array[K] = sq_i
            i+=1
        else:
            new_Array[K]= sq_j
            j-=1
    return new_Array


print(sorted_squared([-8,4,8,9]))  