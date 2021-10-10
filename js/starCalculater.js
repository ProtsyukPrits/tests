let starArray = [62, 79, 49, 87, 40, 2, 26, 20, 8, 61, 48, 24, 31, 74, 77, 23, 80, 37, 18, 78, 68, 56, 82, 12,
    57, 59, 72, 4, 39, 53, 22, 4, 75, 71, 6, 68, 89, 45, 73, 3, 16, 4, 53, 58, 24, 19, 19, 58, 67, 78

];
    let b = [];
// Цикл для номерів
     for(i = 1; i <= 99; i++) {
          totalNumbers = b.push(i);
     }
// Цикл для підрахунку к-сті номерів в масиві  
    for (let i = 0; i < b.length; i++) {
        
        b[i] = starArray.filter(x => x === b[i]).length;
    }

    
    
    document.getElementById("demo2").innerHTML = 
       "Number 1: " + b[0]  +"<br>" + "Number 2: " + b[1] + "<br>" + "Number 3: " + b[2] + 
       "<br>" + "Number 4: " + b[3] + "<br>" + "Number 5: " + b[4] + "<br>" + "Number 6: " + b[5] + "<br>" + "Number 7: " + b[6] + 
       "<br>" + "Number 8: " + b[7] + "<br>" + "Number 9: " + b[8] + "<br>" + "Number 10: " + b[9] + 
    
       "<br>" + "Number 11: " + b[10] + "<br>" + "Number 12: " + b[11] + "<br>" + "Number 13: " + b[12] + "<br>" + "Number 14: " + b[13] + 
       "<br>" + "Number 15: " + b[14] + "<br>" + "Number 16: " + b[15] + "<br>" + "Number 17: " + b[16] + "<br>" + "Number 18: " + b[17] + 
       "<br>" + "Number 19: " + b[18] + "<br>" + "Number 20: " + b[19] +
           
       "<br>" + "Number 21: " + b[20] + "<br>" + "Number 22: " + b[21] + "<br>" + "Number 23: " + b[22] + "<br>" + "Number 24: " + b[23] +
       "<br>" + "Number 25: " + b[24] + "<br>" + "Number 26: " + b[25] + "<br>" + "Number 27: " + b[26] + "<br>" + "Number 28: " + b[27] +
       "<br>" + "Number 29: " + b[28] + "<br>" + "Number 30: " + b[29] +

       "<br>" + "Number 31: " + b[30] + "<br>" + "Number 32: " + b[31] + "<br>" + "Number 33: " + b[32] + "<br>" + "Number 34: " + b[33] +
       "<br>" + "Number 35: " + b[34] + "<br>" + "Number 36: " + b[35] + "<br>" + "Number 37: " + b[36] + "<br>" + "Number 38: " + b[37] +
       "<br>" + "Number 39: " + b[38] + "<br>" + "Number 40: " + b[39] +

       "<br>" + "Number 41: " + b[40] + "<br>" + "Number 42: " + b[41] + "<br>" + "Number 43: " + b[42] + "<br>" + "Number 44: " + b[43] +
       "<br>" + "Number 45: " + b[44] + "<br>" + "Number 46: " + b[45] + "<br>" + "Number 47: " + b[46] + "<br>" + "Number 48: " + b[47] +
       "<br>" + "Number 49: " + b[48] + "<br>" + "Number 50: " + b[49] +

       "<br>" + "Number 51: " + b[50] + "<br>" + "Number 52: " + b[51] + "<br>" + "Number 53: " + b[52] + "<br>" + "Number 54: " + b[53] +
       "<br>" + "Number 55: " + b[54] + "<br>" + "Number 56: " + b[55] + "<br>" + "Number 57: " + b[56] + "<br>" + "Number 58: " + b[57] +
       "<br>" + "Number 59: " + b[58] + "<br>" + "Number 60: " + b[59] +

       "<br>" + "Number 61: " + b[60] + "<br>" + "Number 62: " + b[61] + "<br>" + "Number 63: " + b[62] + "<br>" + "Number 64: " + b[63] +
       "<br>" + "Number 65: " + b[64] + "<br>" + "Number 66: " + b[65] + "<br>" + "Number 67: " + b[66] + "<br>" + "Number 68: " + b[67] +
       "<br>" + "Number 69: " + b[68] + "<br>" + "Number 70: " + b[69] +

       "<br>" + "Number 71: " + b[70] + "<br>" + "Number 72: " + b[71] + "<br>" + "Number 73: " + b[72] + "<br>" + "Number 74: " + b[73] +
       "<br>" + "Number 75: " + b[74] + "<br>" + "Number 76: " + b[75] + "<br>" + "Number 77: " + b[76] + "<br>" + "Number 78: " + b[77] +
       "<br>" + "Number 79: " + b[78] + "<br>" + "Number 80: " + b[79] +

       "<br>" + "Number 81: " + b[80] + "<br>" + "Number 82: " + b[81] + "<br>" + "Number 83: " + b[82] + "<br>" + "Number 84: " + b[83] +
       "<br>" + "Number 85: " + b[84] + "<br>" + "Number 86: " + b[85] + "<br>" + "Number 87: " + b[86] + "<br>" + "Number 88: " + b[87] +
       "<br>" + "Number 89: " + b[88] + "<br>" + "Number 90: " + b[89] +

       "<br>" + "Number 91: " + b[90] + "<br>" + "Number 92: " + b[91] + "<br>" + "Number 93: " + b[92] + "<br>" + "Number 94: " + b[93] +
       "<br>" + "Number 95: " + b[94] + "<br>" + "Number 96: " + b[95] + "<br>" + "Number 97: " + b[96] + "<br>" + "Number 98: " + b[97] +
       "<br>" + "Number 99: " + b[98];

// Привязка номера і к-сті та сортовка мах до min значень    
    b = b.map((item, index) => {
        return { number: index + 1, quantity: item }
    });

     b.sort((item1, item2) => {
         return item2.quantity - item1.quantity
      
     });
    
document.getElementById("demo4").innerHTML =
    "Number " + b[0].number + ": " + b[0].quantity + "<br>" +
    "Number " + b[1].number + ": " + b[1].quantity + "<br>" + "Number " + b[2].number + ": " + b[2].quantity + "<br>" +
    "Number " + b[3].number + ": " + b[3].quantity + "<br>" + "Number " + b[4].number + ": " + b[4].quantity + "<br>" +
    "Number " + b[5].number + ": " + b[5].quantity + "<br>" + "Number " + b[6].number + ": " + b[6].quantity + "<br>" +
    "Number " + b[7].number + ": " + b[7].quantity + "<br>" + "Number " + b[8].number + ": " + b[8].quantity + "<br>" +
    "Number " + b[9].number + ": " + b[9].quantity + "<br>" + "Number " + b[10].number + ": " + b[10].quantity + "<br>" +
    
    "Number " + b[11].number + ": " + b[11].quantity + "<br>" + "Number " + b[12].number + ": " + b[12].quantity + "<br>" +
    "Number " + b[13].number + ": " + b[13].quantity + "<br>" + "Number " + b[14].number + ": " + b[14].quantity + "<br>" +
    "Number " + b[15].number + ": " + b[15].quantity + "<br>" + "Number " + b[16].number + ": " + b[16].quantity + "<br>" +
    "Number " + b[17].number + ": " + b[17].quantity + "<br>" + "Number " + b[18].number + ": " + b[18].quantity + "<br>" +
    "Number " + b[19].number + ": " + b[19].quantity + "<br>" + "Number " + b[20].number + ": " + b[20].quantity + "<br>" +
    
    "Number " + b[21].number + ": " + b[21].quantity + "<br>" + "Number " + b[22].number + ": " + b[22].quantity + "<br>" +
    "Number " + b[23].number + ": " + b[23].quantity + "<br>" + "Number " + b[24].number + ": " + b[24].quantity + "<br>" +
    "Number " + b[25].number + ": " + b[25].quantity + "<br>" + "Number " + b[26].number + ": " + b[26].quantity + "<br>" +
    "Number " + b[27].number + ": " + b[27].quantity + "<br>" + "Number " + b[28].number + ": " + b[28].quantity + "<br>" +
    "Number " + b[29].number + ": " + b[29].quantity + "<br>" + "Number " + b[30].number + ": " + b[30].quantity + "<br>" +

    "Number " + b[31].number + ": " + b[31].quantity + "<br>" + "Number " + b[32].number + ": " + b[32].quantity + "<br>" +
    "Number " + b[33].number + ": " + b[33].quantity + "<br>" + "Number " + b[34].number + ": " + b[34].quantity + "<br>" +
    "Number " + b[35].number + ": " + b[35].quantity + "<br>" + "Number " + b[36].number + ": " + b[36].quantity + "<br>" +
    "Number " + b[37].number + ": " + b[37].quantity + "<br>" + "Number " + b[38].number + ": " + b[38].quantity + "<br>" +
    "Number " + b[39].number + ": " + b[39].quantity + "<br>" + "Number " + b[40].number + ": " + b[40].quantity + "<br>" +

    "Number " + b[41].number + ": " + b[41].quantity + "<br>" + "Number " + b[42].number + ": " + b[42].quantity + "<br>" +
    "Number " + b[43].number + ": " + b[43].quantity + "<br>" + "Number " + b[44].number + ": " + b[44].quantity + "<br>" +
    "Number " + b[45].number + ": " + b[45].quantity + "<br>" + "Number " + b[46].number + ": " + b[46].quantity + "<br>" +
    "Number " + b[47].number + ": " + b[47].quantity + "<br>" + "Number " + b[48].number + ": " + b[48].quantity + "<br>" +
    "Number " + b[49].number + ": " + b[49].quantity + "<br>" + "Number " + b[50].number + ": " + b[50].quantity + "<br>" +

    "Number " + b[51].number + ": " + b[51].quantity + "<br>" + "Number " + b[52].number + ": " + b[52].quantity + "<br>" +
    "Number " + b[53].number + ": " + b[53].quantity + "<br>" + "Number " + b[54].number + ": " + b[54].quantity + "<br>" +
    "Number " + b[55].number + ": " + b[55].quantity + "<br>" + "Number " + b[56].number + ": " + b[56].quantity + "<br>" +
    "Number " + b[57].number + ": " + b[57].quantity + "<br>" + "Number " + b[58].number + ": " + b[58].quantity + "<br>" +
    "Number " + b[59].number + ": " + b[59].quantity + "<br>" + "Number " + b[60].number + ": " + b[60].quantity + "<br>" +

    "Number " + b[61].number + ": " + b[61].quantity + "<br>" + "Number " + b[62].number + ": " + b[62].quantity + "<br>" +
    "Number " + b[63].number + ": " + b[63].quantity + "<br>" + "Number " + b[64].number + ": " + b[64].quantity + "<br>" +
    "Number " + b[65].number + ": " + b[65].quantity + "<br>" + "Number " + b[66].number + ": " + b[66].quantity + "<br>" +
    "Number " + b[67].number + ": " + b[67].quantity + "<br>" + "Number " + b[68].number + ": " + b[68].quantity + "<br>" +
    "Number " + b[69].number + ": " + b[69].quantity + "<br>" + "Number " + b[70].number + ": " + b[70].quantity + "<br>" +

    "Number " + b[71].number + ": " + b[71].quantity + "<br>" + "Number " + b[72].number + ": " + b[72].quantity + "<br>" +
    "Number " + b[73].number + ": " + b[73].quantity + "<br>" + "Number " + b[74].number + ": " + b[74].quantity + "<br>" +
    "Number " + b[75].number + ": " + b[75].quantity + "<br>" + "Number " + b[76].number + ": " + b[76].quantity + "<br>" +
    "Number " + b[77].number + ": " + b[77].quantity + "<br>" + "Number " + b[78].number + ": " + b[78].quantity + "<br>" +
    "Number " + b[79].number + ": " + b[79].quantity + "<br>" + "Number " + b[80].number + ": " + b[80].quantity + "<br>" +

    "Number " + b[81].number + ": " + b[81].quantity + "<br>" + "Number " + b[82].number + ": " + b[82].quantity + "<br>" +
    "Number " + b[83].number + ": " + b[83].quantity + "<br>" + "Number " + b[84].number + ": " + b[84].quantity + "<br>" +
    "Number " + b[85].number + ": " + b[85].quantity + "<br>" + "Number " + b[86].number + ": " + b[86].quantity + "<br>" +
    "Number " + b[87].number + ": " + b[87].quantity + "<br>" + "Number " + b[88].number + ": " + b[88].quantity + "<br>" +
    "Number " + b[89].number + ": " + b[89].quantity + "<br>" + "Number " + b[90].number + ": " + b[90].quantity + "<br>" +

    "Number " + b[91].number + ": " + b[91].quantity + "<br>" + "Number " + b[92].number + ": " + b[92].quantity + "<br>" +
    "Number " + b[93].number + ": " + b[93].quantity + "<br>" + "Number " + b[94].number + ": " + b[94].quantity + "<br>" +
    "Number " + b[95].number + ": " + b[95].quantity + "<br>" + "Number " + b[96].number + ": " + b[96].quantity + "<br>" +
    "Number " + b[97].number + ": " + b[97].quantity + "<br>" + "Number " + b[98].number + ": " + b[98].quantity;
   
    