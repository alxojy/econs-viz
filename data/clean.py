life = open("life-satisfaction.csv",'r')
out = open('life_satisfaction.csv', 'w')
prev = ''
for i, line in enumerate(life):
    test  = line.split(',')
    if 2005 < int(test[2].strip()) < 2017:

        if prev == '' or prev[0] != test[0]:
            print(prev, test)
            start = 0
        else:
            start = prev[4]
        end = test[1]

        cat = "increase" if (float(end)-float(start) > 0) else "decrease"
        out.write(str(test[0]) + ',' + str(test[2].strip()) + ',' + str(start) + ',' + str(end) + ',' + cat + '\n')
        
        prev = test + [start, end]

life.close()
out.close()