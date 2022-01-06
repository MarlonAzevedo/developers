const con = require('../connection');
const axios = require('axios').default;
axios.defaults.timeout = 60000;

async function list()
{  
    let res = await  con.query("SELECT * FROM developers");
    return res;
}
async function get(id){
    let res = await  con.query("SELECT * FROM developers where id like "+ id);
    return res;
}
async function insert(name,sex,age,hobby,birthdate)
{
    var sql = "INSERT into developers (name,sex,age,hobby,birthdate) values ('"+name+"','"+sex+"',"+age+",'"+hobby+"','"+birthdate+"')";
    let res = await con.query(sql);
    return res.insertId;
}
async function update(id,name,sex,age,hobby,birthdate)
{
    var sql = "update developers set name ='"+name+"',sex = '"+sex+"',age = '"+age+"',hobby = '"+hobby+"',birthdate = '"+birthdate+"' where id LIKE "+id;
    let res = await con.query(sql);
    if(res.affectedRows!=0){
        return "true";
    }else{
        return "false"
    }
}
async function del(id)
{
    let res = await  con.query("delete FROM developers where id like "+id);
    if(res.affectedRows!=0){
        return "true";
    }else{
        return "false"
    }
    
}
async function filter(filter,body)
{
    var sql ="SELECT * FROM developers where " +filter+" like '%"+body[filter]+"%'"
    let res = await  con.query(sql);
    return res;
}

module.exports = {
    list,
    insert,
    update,
    del,
    get,
    filter
}