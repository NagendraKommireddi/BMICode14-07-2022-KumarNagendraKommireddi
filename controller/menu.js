const bmiModel = require('./../model/menu')

class MenuClass {
    async getallBmiDetails(){
        try{
            let data =  await bmiModel.getallDetails().then((res) => res);

            return new Promise((resolve,reject) =>{
                resolve({status:"success",response:data})
            })
        }catch(error){
            console.log(error);
            return new Promise((resolve, reject) => {
                reject(error.message);
            });
        }
    }

    async calculateNewBmi(data,headers){
    try{
        let bmiData = data;

        let totalData = [];
        for (let i = 0; i < bmiData.length; i++) {
            let element = data[i];
            if(!['Male','Female'].includes(element.Gender)){
                throw new Error('Invalid Gender Param');
            }
            if(isNaN(element.HeightCm) && element.HeightCm > 0){
                throw new Error('Invalid Height Param');
            }
            if(isNaN(element.WeightKg) && element.WeightKg > 0){
                throw new Error('Invalid Weight Param');
            }
            let bmi = element.WeightKg/Math.pow(element.HeightCm * 0.01,2);
            let sqlInsertData;
                if (bmi <= 18.4 ){
                    sqlInsertData = [
                        element.Gender,
                        element.HeightCm,
                        element.WeightKg,
                        bmi,
                        'UnderWeight',
                        'Malnutrition risk'
                    ]
                }
                else if( bmi >= 18.5 && bmi <= 24.9 ){
                    sqlInsertData = [
                        element.Gender,
                        element.HeightCm,
                        element.WeightKg,
                        bmi,
                        'Normal Weight',
                        'Low risk'
                    ]
                }
                else if( bmi >= 25 && bmi <=29.9 ){
                    sqlInsertData = [
                        element.Gender,
                        element.HeightCm,
                        element.WeightKg,
                        bmi,
                        'OverWeight',
                        'Enhanced risk'
                    ]
                }
                else if( bmi >= 30 && bmi <= 34.9 ){
                    sqlInsertData = [
                        element.Gender,
                        element.HeightCm,
                        element.WeightKg,
                        bmi,
                        'Moderately Obese',
                        'Medium risk'
                    ]
                }
                else if( bmi >= 35 && bmi <= 39.9 ){
                    sqlInsertData = [
                        element.Gender,
                        element.HeightCm,
                        element.WeightKg,
                        bmi,
                        'Severely Obese',
                        'High'
                    ]
                }
                else if( bmi >= 40 ){
                    sqlInsertData = [
                        element.Gender,
                        element.HeightCm,
                        element.WeightKg,
                        bmi,
                        'Very Severely Obese',
                        'High risk'
                    ]
                }

        totalData.push(sqlInsertData);   
        }

        if(totalData && totalData.length > 0){
            let insertDetials = bmiModel.insertBmiDetails(totalData);
        } 
        return new Promise((resolve,reject) =>{
            resolve({status:"success",response:'Data Inserted Successfully'})
         })
    }catch (error) {
        console.log(error);
        return new Promise((resolve, reject) => {
          reject(error);
        });
    }
}

async getoverWeightBmiCount(){
    try{
        let data =  await bmiModel.getOverweightCount().then((res) => res);
        return new Promise((resolve,reject) =>{
            resolve({status:"success",response:data})
        })
    }catch(error){
        console.log(error);
        return new Promise((resolve, reject) => {
            reject(error.message);
        });
    }
}
}

module.exports = new MenuClass();