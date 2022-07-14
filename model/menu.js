const mysql = require('../sys/mysql');

class MenuClass {
    async getallDetails() {
      return new Promise((resolve, reject) => {
        mysql.query(
          `select * from bmi; ;
        `,
          (err, result) => {
            if (err) {
              reject(err);
            } else resolve(result);
          }
        );
      });
    }

    async insertBmiDetails(data){
        return new Promise((resolve, reject) => {
            mysql.query(
              `Insert into bmi (gender, height, weight, bmi, bmi_category, health_risk) VALUES ?; ;
            `,
            [data],
              (err, result) => {
                if (err) {
                  reject(err);
                } else resolve(result);
              }
            );
          });
    }

    async getOverweightCount(){
        return new Promise((resolve, reject) => {
            mysql.query(
              `select count(*)  as count from bmi where bmi_category  = ? ; ;
            `,
            ['OverWeight'],
              (err, result) => {
                if (err) {
                  reject(err);
                } else resolve(result);
              }
            );
          });
    }
}

module.exports = new MenuClass();