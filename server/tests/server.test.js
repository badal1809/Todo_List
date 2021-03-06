const expect = require('expect');
const request = require('supertest');
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todoList = [{
    "text": "First Test"
},{
    "text": "Second Test"
}];

beforeEach((done)=> {
    Todo.remove({}).then(() => {
       return Todo.insertMany(todoList);
    }).then(()=> done());
});

describe(' Test POST request', () => {
    it('should create a new todo', (done) => {
        var text = 'Test Todo';
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) =>{
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                done();
            }).catch((e) => done(e) );
        })
    });

    it('should validate empty todo', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            Todo.find({text:""}).then((todos) => {
                expect(todos.length).toBe(0);
                done();
            }).catch((e) => done(e) );
        })
    });

});

describe('Test GET request', () => {
    it('should receive a new todo', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) =>{
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
        })
});