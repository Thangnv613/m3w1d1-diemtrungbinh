let arr = [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

 ];
 let countMale = 0;
 let sumFemale = 0;
 let countFemale = 0;
 let sumMale = 0;
for (const gender of arr ){
    if(gender.gender == 'male'){
        countMale += 1;
        sumMale += gender.poin;
    }
    else{
        countFemale += 1;
        sumFemale += gender.poin;
    }
} 
console.log(sumFemale, sumMale);
    console.log(`Diem trung binh cua nam la: ${sumMale/countMale}`);
    console.log(`Diem trung binh cua nu la: ${sumFemale/countFemale}`);