var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("Homepage unit Test",function(){
  it("should return home page",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.message.should.equal("Server Working!");
      done();
    });
  });



});
describe("Get all Bmi Data",function(){
    it("should return all the bmi in database",function(done){
      server
      .get("/menu/")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res){
        res.status.should.equal(200);
        res.body.status.should.equal("success")
        done();
      });
    });
  
  
  
  });

  describe("Get count of  overweight Bmi Data",function(){
    it("should return count of overweight people",function(done){
      server
      .get("/menu/overweightcount")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res){
        res.status.should.equal(200)
        res.body.status.should.equal("success")
        done();
      });
    });
  
  });

  describe("Insert data into the database",function(){
    it("should return some data",function(done){
    let data = {
        Gender : "Male",
        HeightCm: 171,
        WeightKg: 96
    };
      server
      .post("/menu/add")
      .send(data)
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res){
        res.status.should.equal(200);
        res.body.status.should.equal("success")
        res.body.response.should.equal("Data Inserted Successfully")
        done();
      });
    });
});